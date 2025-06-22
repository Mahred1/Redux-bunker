const initialState = {
  balance: 0,
  loan: 0,
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposite":
      return { ...state, balance: state.balance + action.payload };

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

export {
    deposite
}
