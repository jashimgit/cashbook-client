/* eslint-disable no-unused-vars */

import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function AddCustomerModal({ show, handleClose }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:8000/customer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                customerName: data.customerName,
                address: data.address,
                phone: data.phone,
                status: data.status,
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        handleClose();
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Enter customer Name"
                                {...register("customerName")}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                as="textarea"
                                rows={2}
                                placeholder="Enter customer address"
                                {...register("address")}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Enter customer Phone"
                                {...register("phone")}
                            />
                        </Form.Group>
                        <Form.Group>
                            <>
                                {["radio"].map((type) => (
                                    <div
                                        key={`inline-${type}`}
                                        className="mb-3"
                                    >
                                        <Form.Check
                                            inline
                                            label="Active"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                            value="1"
                                            {...register("status")}
                                        />
                                        <Form.Check
                                            inline
                                            label="Inactive"
                                            name="group1"
                                            type={type}
                                            value="0"
                                            id={`inline-${type}-2`}
                                            {...register("status")}
                                        />
                                    </div>
                                ))}
                            </>
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
