import React , {useContext } from "react";
import { AppContext } from './../../App';
import CustomerLists from './customer/CustomerLists';

export default function DashboardMainContent() {
    const context = useContext(AppContext)
    return (
        <div className="row">
            <div className="col-md-12">
                <h4 className="lead my-2">Dashboard section</h4>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card bg-success">
                            <div className="card-body">
                                <h4 className="card-title">Total {context.length} customers</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-info">
                            <div className="card-body">
                                <h4 className="card-title">card title</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-primary">
                            <div className="card-body">
                                <h4 className="card-title">card title</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomerLists />
        </div>
    );
}
