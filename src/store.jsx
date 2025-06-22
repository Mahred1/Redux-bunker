import { createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";

 const store= createStore(accountReducer)

 store.dispatch({type:"account/deposite",payload:1000})
 console.log(store.getState())

export default  store