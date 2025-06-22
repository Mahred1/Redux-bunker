import { createStore } from "redux";
import accountReducer, { payLoan, requestLoan } from "./features/accounts/accountSlice";

 const store= createStore(accountReducer)

 store.dispatch({type:"account/deposite",payload:1000})
 console.log(store.getState())
 store.dispatch({type:"account/withdraw",payload:500})
 console.log(store.getState())
store.dispatch(requestLoan(100,"poor"))
 console.log(store.getState())
 store.dispatch(payLoan())
 console.log(store.getState())

export default  store