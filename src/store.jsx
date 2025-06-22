import { createStore } from "redux";
import accountReducer, { payLoan, requestLoan } from "./features/accounts/accountSlice";

 const store= createStore(accountReducer)


export default  store