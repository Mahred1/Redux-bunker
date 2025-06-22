import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer, {

} from "./features/accounts/accountSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;
