/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function AddServiceMoal({ show, handleClose }) {
    const { register, handleSubmit } = useForm();
    const [customers, setCustomers] = useState([]);
    console.log(customers);

    useEffect(() => {
        fetch("http://localhost:8000/customer")
            .then((res) => res.json())
            .then((data) => setCustomers(data.data));
            console.log('service modal rendered')
            return () => {
                
            }
    }, []);

    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:8000/service', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customerId: data.customerId,
                serviceType: data.serviceType,
                serviceBill: data.serviceBill,
                paymentStatus: data.paymentStatus,
                jobDate: data.jobDate,
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        handleClose()
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Service</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Select Customer Name</Form.Label>
                            <Form.Control
                                as="select"
                                custom
                                {...register("customerId")}
                            >
                                { customers && customers.map((customer) => {
                                    return (
                                        <option value={customer.id}>
                                            {customer.customerName}
                                        </option>
                                    );
                                })}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control 
                                as="select"
                                custom
                                {...register("serviceType")}
                            >
                                <option>Select service type</option>
                                <option value="online">online</option>
                                <option value="card">card</option>
                                
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="service bill"
                                {...register("serviceBill")}
                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control 
                                as="select"
                                custom
                                {...register("paymentStatus")}
                            >
                                <option>Select Payment status</option>
                                <option value="unpaid">unpaid</option>
                                <option value="paid">paid</option>
                                
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="date"
                                placeholder="Enter job date"
                                {...register("jobDate")}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
