/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./component/dashboard/Dashboard";
import Home from "./component/front/Home";
import AddServiceModal from './component/dashboard/modal/AddServiceModal';
import Customer from "./component/dashboard/customer/Customer";
import CustomerDetails from "./component/dashboard/customer/CustomerDetails";
import Payment from "./component/dashboard/payment/Payment";
import Service from './component/dashboard/service/Service';


export const AppContext = createContext()

function App() {
    
    const [customers, setCutomers ] = useState([])
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/customer')
        .then(res => res.json())
        .then(data => setCutomers(data.data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:8000/payment')
        .then(res => res.json())
        .then(data => setPayments(data.paymentlist))
    }, [])

    return (
        <AppContext.Provider value={{customers, payments}}>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard" exact>
                    <Dashboard />
                </Route>
                <Route path="/customer" exact>
                    <Customer />
                </Route>
                <Route path="/customer/:id">
                    <CustomerDetails />
                </Route>
                <Route path="/payment">
                    <Payment />
                </Route>
                <Route path="/service" exact>
                    <Service />
                </Route>
                <Route path="/add-service" exact>
                    <AddServiceModal />
                </Route>
            </Switch>
        </Router>
        </AppContext.Provider>
    );
}

export default App;
