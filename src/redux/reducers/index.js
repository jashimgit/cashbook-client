import { combineReducers } from "redux";

import { customerReducer,selectedCustomerReducer } from "./customerReducer";

const rootReducers = combineReducers({
    allCustomers: customerReducer,
    customer: selectedCustomerReducer
});

export default rootReducers;
