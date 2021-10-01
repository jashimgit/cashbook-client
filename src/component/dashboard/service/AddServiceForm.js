import React from "react";

export default function AddServiceForm() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4>Add service </h4>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="form-group">
                                    <select className="form-control">
                                        <option>Select customer ... </option>
                                        <option value="1">customer 1</option>
                                        <option value="2">customer 2</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="form-control">
                                        <option>
                                            Select service Type ...{" "}
                                        </option>
                                        <option value="1">online copy 1</option>
                                        <option value="2">Card</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Payment status</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Service date</label>
                                    <input
                                        className="form-control"
                                        type="date"
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
