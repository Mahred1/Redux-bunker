import { useSelector } from "react-redux";

function Customer() {
  const fullName = useSelector((store) => store.customer.fullName);
  return fullName !== "" && <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
