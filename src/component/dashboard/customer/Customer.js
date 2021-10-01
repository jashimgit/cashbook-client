/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { BiTrashAlt } from "react-icons/bi";
import TestModal from "../modal/TestModal";
import { useForm } from "react-hook-form";
import formatDate from "../../../lib/dateFormat";

// BsPencil
export default function Customer() {
    const [customers, setCustomers] = useState([]);
    const [filter, setFilter] = useState("");
    const [show, setShow] = useState(false);
    // const { id } = useParams()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // const onSubmit = (data) => console.log(data);
    const handleClose = () => setShow(false);

    useEffect(() => {
        fetch("http://localhost:8000/customer")
            .then((res) => res.json())
            .then((data) => setCustomers(data.data));
        console.log("customer rendered");
    }, []);

    const convertDate = (str) => {
        var currentdate = new Date(str * 1000);
        var date = currentdate.toGMTString();
        console.log(date);
    };

    return (
        <DashboardLayout>
            <div className="row">
                <div className="col-sm-12 my-2 text-center ">
                    <h4>Customer section</h4>
                    <div className="bg-success d-flex justify-content-between py-2">
                        <button
                            className="btn btn-outline-danger text-white btn-sm ml-2"
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
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">address</th>
                                <th scope="col">phone</th>
                                <th scope="col">status</th>
                                <th scope="col">CreatedAt</th>
                                <th scope="col">action</th>
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
