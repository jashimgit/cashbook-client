/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import AddServiceModal from "../modal/AddServiceModal";
import formatDate from '../../../lib/dateFormat';
import {CustomerContext } from '../../../App'

export default function Service() {
    const [show, setShow] = useState(false);
    const [filter, setFilter] = useState("");
    const handleClose = () => setShow(false);
    const [services, setServices] = useState([]);
    // const [customers, setCustomers] = useState([]);
    const customers = useContext(CustomerContext)

    useEffect(() => {
        fetch("http://localhost:8000/service")
            .then((res) => res.json())
            .then((data) => setServices(data.response));
        return () => {};
    }, [services]);

    

    return (
        <DashboardLayout>
            <div className="row">
                <div className="col-sm-12 my-2 text-center ">
                    <h4>Service section</h4>
                    <div className="bg-secondary d-flex justify-content-between py-2">
                        <button
                            className="btn btn-outline-danger text-white btn-sm ml-2"
                            onClick={() => setShow(true)}
                        >
                            <AiOutlinePlus /> Add Service
                        </button>

                        <input
                            className="mr-2"
                            placeholder="Search"
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-sm-12 mt-2">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Bill</th>
                                <th scope="col">Payment status</th>
                                <th scope="col">date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services &&
                                services.map((service, index) => {
                                    return (
                                        <tr key={service.id}>
                                            <td>{index + 1} </td>
                                            <td>
                                                {service.Customer.customerName}
                                            </td>
                                            <td>{service.serviceType}</td>
                                            <td> {service.serviceBill}</td>
                                            <td>{service.paymentStatus}</td>
                                            <td>{formatDate(service.jobDate)}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>

                <AddServiceModal show={show} handleClose={handleClose}  />
            </div>
        </DashboardLayout>
    );
}
