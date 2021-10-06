import actionTypes from "./../actions/actionTypes";
const initialState = [];

export const setPaymentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PAYMENTS:
            return {
                ...state,
                payments: payload,
            };

        default:
            return state;
    }
};
