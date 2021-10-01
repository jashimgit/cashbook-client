import React from "react";

export default function DashboardMainContent() {
    return (
        <div className="row">
            <div className="col-md-12">
                <h4>Dashboard section</h4>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card bg-success">
                            <div className="card-body">
                                <h4 className="card-title">card title</h4>
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
        </div>
    );
}
