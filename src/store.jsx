import { combineReducers, createStore } from "redux";
import accountReducer, {
  deposite,
  payLoan,
  requestLoan,
} from "./features/accounts/accountSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import customerReducer, {
  createAccount,
} from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

store.dispatch(createAccount("mahfuz redwan", "1234re"));
console.log(store.getState());
export default store;
