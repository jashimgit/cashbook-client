import { combineReducers } from "redux";

import { customerReducer,selectedCustomerReducer } from "./customerReducer";
import { setPaymentReducer } from './paymentReducer';

const rootReducers = combineReducers({
    allCustomers: customerReducer,
    customer: selectedCustomerReducer,
    payments: setPaymentReducer
});

export default rootReducers;
