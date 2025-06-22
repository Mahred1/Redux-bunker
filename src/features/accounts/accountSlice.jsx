const initialState = {
  balance: 0,
  loanAmount: 0,
  loanPurpouse: "",
  loading: false,
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposite":
      return { ...state, balance: state.balance + action.payload ,loading:false};
    case "account/withdraw":
      if (state.balance < action.payload) return;
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loanAmount: action.payload.amount,
        loanPurpouse: action.payload.purpouse,
      };
    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loanAmount,
        loanAmount: 0,
        loanPurpouse: "",
      };
    case "account/converting":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

function deposite(amount, currency) {
  if (currency === "USD") {
    return {
      type: "account/deposite",
      payload: amount,
    };
  }

  return async (dispatch) => {
    dispatch({type:"account/converting"})
    const res = await fetch(
      "https://api.frankfurter.app/latest?from=" + currency + "&to=USD"
    );
    const data = await res.json();
  
    const converted = data.rates.USD * amount;
    dispatch( {
      type: "account/deposite",
      payload: converted,
    });
  };
}

function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

function requestLoan(amount, purpouse) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpouse },
  };
}

function payLoan() {
  return {
    type: "account/payLoan",
  };
}

export { deposite, withdraw, requestLoan, payLoan };
