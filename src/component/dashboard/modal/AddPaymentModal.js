/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";


export default function AddPaymentModal({ show, handleClose }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:8000/payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customerId: data.customerId,
                paymentType: data.paymentType,
                ReceivedAmount: data.ReceivedAmount,
                notes: data.notes
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
                    <Modal.Title>Add Payment</Modal.Title>
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
                                {customers.map((customer) => {
                                    return (
                                        <option value={customer.id} key={customer.id}>
                                            {customer.customerName}
                                        </option>
                                    );
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Enter payment type"
                                {...register("paymentType")}
                            />
                            <Form.Text className="text-muted">
                                Payment type would be Bkash, Nagad or Rocket
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Enter Notes"
                                {...register("ReceivedAmount")}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Enter Notes"
                                {...register("notes")}
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
