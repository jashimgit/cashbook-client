import { combineReducers } from "redux";

import { customerReducer } from "./customerReducer";

const rootReducers = combineReducers({
    allCustomers: customerReducer,
});

export default rootReducers;
