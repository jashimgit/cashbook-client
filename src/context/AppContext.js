import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [customers, setCustomers] = useState([]);
    const [payments, setPayments] = useState([]);
    const [services, setservices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/customer")
            .then((res) => res.json())
            .then((data) => setCustomers(data.data));
    }, [customers]);
    useEffect(() => {
        fetch("http://localhost:8000/payment")
            .then((res) => res.json())
            .then((data) => setPayments(data.paymentlist));
    }, [payments]);

    useEffect(() => {
        fetch("http://localhost:8000/service")
            .then((res) => res.json())
            .then((data) => setservices(data.response));
    }, [services]);
    return (
        <AppContext.Provider value={{ customers, payments, services }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
