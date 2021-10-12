/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./component/dashboard/Dashboard";
import Home from "./component/front/Home";
import AddServiceModal from './component/dashboard/modal/AddServiceModal';
import Customer from "./component/dashboard/customer/Customer";
import CustomerDetails from "./component/dashboard/customer/CustomerDetails";
import Payment from "./component/dashboard/payment/Payment";
import Service from './component/dashboard/service/Service';
import AppContextProvider from './context/AppContext';




function App() {
      

   

    return (
        <AppContextProvider>
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
        </AppContextProvider>
    );
}

export default App;
