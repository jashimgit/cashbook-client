/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { BiTrashAlt } from "react-icons/bi";
import TestModal from "../modal/TestModal";
import { useForm } from "react-hook-form";
import formatDate from "../../../lib/dateFormat";
import { CustomerContext } from '../../../App';

// BsPencil
export default function Customer() {
    // const [customers, setCustomers] = useState([]);
    const [filter, setFilter] = useState("");
    const [show, setShow] = useState(false);
    
    const customers = useContext(CustomerContext);

    const handleClose = () => setShow(false);


    return (
        <DashboardLayout>
            <div className="row">
                <div className="col-sm-12 my-2 text-center ">
                    <h4>Customer section</h4>
                    <div className="bg-dark d-flex justify-content-between py-2">
                        <button
                            className="btn btn-success text-white btn-sm ml-2"
                            onClick={() => setShow(true)}
                        >
                            <AiOutlinePlus /> Add Customer
                        </button>

                        <input
                            className="mr-2"
                            placeholder="Search"
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-sm-12 mt-2">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>address</th>
                                <th>phone</th>
                                <th>last Payment Date</th>
                                <th>status</th>
                                <th>CreatedAt</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers
                                .filter((value) => {
                                    return value.customerName
                                        .toLowerCase()
                                        .includes(filter.toLowerCase());
                                })
                                .map((customer, index) => (
                                    <tr key={customer.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{customer.customerName}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.phone}</td>
                                        <td>{ new Date().toLocaleDateString() }</td>
                                        <td>
                                            {formatDate(customer.createdAt)}
                                        </td>
                                        <td>
                                            {customer.status
                                                ? "Active"
                                                : "In Active"}
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-info btn-sm mx-1 pb-1">
                                                <Link
                                                    to={`/customer/${customer.id}`}
                                                >
                                                    <AiOutlineEye />
                                                </Link>
                                            </button>
                                            <button className="btn btn-outline-primary btn-sm mx-1 pb-1">
                                                <BsPencil />
                                            </button>
                                            <button className="btn btn-outline-danger btn-sm mx-1 pb-1">
                                                <BiTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                <TestModal show={show} handleClose={handleClose} />
            </div>
        </DashboardLayout>
    );
}
