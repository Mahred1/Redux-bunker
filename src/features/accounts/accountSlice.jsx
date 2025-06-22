const initialState = {
  balance: 0,
  loanAmount: 0,
  loadPurpouse: "",
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposite":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      if (state.balance < action.payload) return;
      return { ...state, balance: state.balance - action.payload };

    default:
      return state;
  }
}

function deposite(amount) {
  return {
    type: "account/deposite",
    payload: amount,
  };
}

function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

export { deposite ,withdraw};
