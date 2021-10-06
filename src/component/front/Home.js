import {useEffect} from 'react'
import Navbar from './Navbar'
import {useDispatch} from 'react-redux';

import { setCustomers } from './../../redux/actions/customerAction';
import { setPayments } from './../../redux/actions/paymentActions';

export default function Home() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:8000/customer")
            .then((res) => res.json())
            .then((data) => dispatch(setCustomers(data)));
    }, [dispatch]);

    useEffect(() => {
        fetch('http://localhost:8000/payment')
        .then(res => res.json())
        .then(data => dispatch(setPayments(data.paymentlist)))
    })

    return (
        <div>
            <Navbar />
            <h4 className="text-center my-3">Welcome to Cashbook</h4>
        </div>
    )
}
