import actionTypes from "./actionTypes";

export const setCustomers = (customers) => {
    return {
        type: actionTypes.SET_CUSTOMERS,
        payload: customers,
    };
};

export const selectedCustomer = (customer) => {
    return {
        type: actionTypes.SELECTED_CUSTOMER,
        payload: customer,
    };
};


export const removeSelectedCustomer = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_CUSTOMER
    };
};
