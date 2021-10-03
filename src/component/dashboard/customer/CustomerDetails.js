/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import { useParams } from "react-router-dom";
import dateFormat from "../../../lib/dateFormat";
// import { CustomerContext } from "../../../App";

export default function CustomerDetails() {
    const { id } = useParams();
    const [customer, setCustomer] = useState({});
    const { customerName, address, phone, status, Services, Payments } =
        customer;

    useEffect(() => {
        fetch(`http://localhost:8000/customer/${id}`)
            .then((res) => res.json())
            .then((data) => setCustomer(data.customer[0]));
    }, []);

    const calculateTotalService = () => {
        if (Services && Services.length > 0) {
            console.log(Services);
            return Services.reduce(
                (currentValue, item) => currentValue + item.serviceBill,
                0
            );
        } else {
            console.log("no data found");
        }
    };

    // console.log("total service price:", calculateTotalService());

    // function getPaymentList() {
    //     if (Payments && Payments.length > 0) {
    //         Payments.map((item, index) => {
    //             return (
    //                 <tr>
    //                     <td>{index + 1}</td>
    //                     <td>{item.paymentType}</td>
    //                     <td>{item.ReceivedAmount}</td>
    //                     <td>{dateFormat(item.createdAt)}</td>
    //                 </tr>
    //             );
    //         });
    //     }
    // }

    return (
        <DashboardLayout>
            <div className="row">
                <div className="col-sm-12 my-2">
                    <h4> {customerName}</h4>
                    <h5>ID: {id} </h5>
                </div>
                <div className="col-sm-12 mt-2">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                    alt=""
                                />
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>{customerName}</h5>
                                <h6>{address}</h6>
                                <h6>Total Service Bill: {calculateTotalService()} Taka</h6>
                                <h6>Total Paid: 22 Taka</h6>
                                <h6>Total Due: 500 Taka</h6>
                                <p className="proile-rating">
                                    Phone : <span> {phone} </span>
                                </p>
                                <ul
                                    className="nav nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="home-tab"
                                            data-toggle="tab"
                                            href="#home"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="profile-tab"
                                            data-toggle="tab"
                                            href="#profile"
                                            role="tab"
                                            aria-controls="profile"
                                            aria-selected="false"
                                        >
                                            Timeline
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input
                                type="submit"
                                className="profile-edit-btn"
                                name="btnAddMore"
                                value="Edit Profile"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>none</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div
                                className="tab-content profile-tab"
                                id="myTabContent"
                            >
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{id} </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{customer?.customerName}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>demo@example.com</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{customer?.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Private Service</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">paid By</th>
                                                <th scope="col">amount</th>
                                                <th scope="col">
                                                    Payment Date
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* map function will be here or user defined function */}
                                            {Payments && Payments.length > 0 ? (
                                                Payments.map((item, index) => {
                                                    return (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>
                                                                {
                                                                    item.paymentType
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.ReceivedAmount
                                                                }
                                                            </td>
                                                            <td>
                                                                {dateFormat(
                                                                    item.createdAt
                                                                )}
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            ) : (
                                                <tr>
                                                    <td>no data</td>
                                                    <td>no data</td>
                                                    <td>no data</td>
                                                    <td>no data</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
