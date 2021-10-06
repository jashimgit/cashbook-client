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

