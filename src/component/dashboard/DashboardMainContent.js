/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import CustomerLists from "./customer/CustomerLists";
import { AppContext } from "./../../context/AppContext";

import formatDate from "./../../lib/dateFormat";
export default function DashboardMainContent() {
    const { customers } = useContext(AppContext);
    const { services } = useContext(AppContext);

    const getCurrentServices = () => {
        services.filter((item) => {
            let today = new Date().toLocaleDateString();
            let serviceDate = formatDate(item.createdAt);
            // console.log(formatDate(item.createdAt) === new Date().toLocaleDateString());
            console.log("today", today); //today 10/9/2021
            console.log("serviceDate", serviceDate); // serviceDate 6/10/2021
        });
    };
    useEffect(() => {
        return () => {
            console.log("dashobard unmounted");
        };
    }, []);

    // getCurrentServices();
    return (
        <div className="row">
            <div className="col-md-12">
                <h4 className="lead my-2 text-white">Dashboard section</h4>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card bg-success">
                            <div className="card-body">
                                <h4 className="card-title text-white">
                                    Total Service
                                </h4>
                                <h5 className="card-text text-white">
                                    {new Date().toLocaleDateString()}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-success">
                            <div className="card-body">
                                <h4 className="card-title text-white">
                                    Total {customers.length} customers
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-info">
                            <div className="card-body">
                                <h4 className="card-title text-white">
                                    card title
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-primary">
                            <div className="card-body">
                                <h4 className="card-title text-white">
                                    card title
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomerLists />
        </div>
    );
}
