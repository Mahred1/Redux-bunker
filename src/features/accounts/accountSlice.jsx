const initialState = {
  balance: 0,
  loanAmount: 0,
  loanPurpouse: "",
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposite":
      return { ...state, balance: state.balance + action.payload };
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
        return{
            ...state,
            balance: state.balance - state.loanAmount,
            loanAmount : 0,
            loanPurpouse : ""
        }
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

function requestLoan(amount,purpouse){
    return{
        type:"account/requestLoan",
        payload:{amount,purpouse}
    }
}

function payLoan(){
    return {    
        type:"account/payLoan"
    }
}

export { deposite, withdraw,requestLoan,payLoan };
