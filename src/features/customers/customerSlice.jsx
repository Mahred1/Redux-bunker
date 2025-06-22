const initialState = {
  fullName: "",
  nationalId: "",
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "customer/createAccount":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
      };

    default:
      return state;
  }
}

function createAccount(fullName, nationalId) {
  return {
    type: "customer/createAccount",
    payload: {
      fullName,
      nationalId,
    },
  };
}

export {createAccount}