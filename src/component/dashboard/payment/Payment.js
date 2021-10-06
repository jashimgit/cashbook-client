/* eslint-disable no-unused-vars */
import { useEffect, useState} from "react";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import DashboardLayout from "../Layout/DashboardLayout";
import AddPaymentModal from "../modal/AddPaymentModal";
import { useSelector } from 'react-redux';


export default function Payment() {
    const [filter, setFilter] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow((show) => show === !show);
    const payments = useSelector(state => state.payments.payments);
    
    useEffect( () => {
        console.log('payment component rendered')
    }, [payments])
    
    return (
        <DashboardLayout>
            <div className="row">
                <div className="col-sm-12 my-2 text-center">
                    <h4>Payment section</h4>
                    <div className="bg-purple d-flex justify-content-between py-2">
                        <button
                            className="btn btn-outline-info text-white btn-sm ml-2"
                            onClick={() => setShow(true)}
                        >
                            <AiOutlinePlus /> Add payment
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
                                <th scope="col">customer name</th>
                                <th scope="col">payment type</th>
                                <th scope="col">Received</th>
                                
                                <th scope="col">Notes</th>
                                <th scope="col">UpdateTime</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments &&
                                payments.map((payment, index) => {
                                        return (
                                            <tr key={payment.id}>
                                                <td>{index + 1}</td>
                                                <td>{payment?.Customer?.customerName}</td>
                                                <td>{payment.paymentType}</td>
                                                <td>
                                                    {payment.ReceivedAmount}
                                                </td>
                                                <td>{payment.DueAmount}</td>
                                                <td> {payment.notes}</td>
                                                <td>{payment.updatedAt}</td>
                                            </tr>
                                        );
                                    })}
                        </tbody>
                    </table>
                </div>
            </div>

            <AddPaymentModal show={show} handleClose={handleClose} />
        </DashboardLayout>
    );
}
