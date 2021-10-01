import React from "react";
import DashboardLayout from '../Layout/DashboardLayout'

export default function AddCustomerForm() {
    return (
        <DashboardLayout>
            <div className="row">
                <div className="col-sm-12 my-2 text-center">
                    <h4>Add customer </h4>
                </div>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="form-group">
                                    <label>customer name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <select className="form-control">
                                        <option>Select status ... </option>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
