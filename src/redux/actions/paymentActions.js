
import actionTypes from './actionTypes';

export const setPayments = (payments) => {
    return {
        type: actionTypes.SET_PAYMENTS,
        payload: payments
    }
}