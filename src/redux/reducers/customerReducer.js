import actionTypes from "../actions/actionTypes";

const initialState = [];

export const customerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_CUSTOMERS:
            return {
                ...state,
                customers: payload,
            };

        default:
            return state;
    }
};


export const selectedCustomerReducer = (state = {}, {type, payload})=> {
    switch (type) {
        case actionTypes.SELECTED_CUSTOMER:
            return {
                ...state,
                ...payload
            };
    
        default:
            return state;
    }
}