/* eslint-disable no-unused-vars */
import {useState, useEffect } from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";


export default function Service() {
    const [show, setShow] = useState(false);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/service')
        .then(res => res.json())
        .then(data => console.log(data))
        return () => {
            
        }
    }, [])


    return (
        <DashboardLayout>
            <div className="row">
                <div className="col-sm-12 my-2 text-center ">
                    <h4>Service section</h4>
                    <div className="bg-secondary d-flex justify-content-between py-2">
                        <button
                            className="btn btn-success text-white btn-sm ml-2"
                            
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
                    
                </div>
                
            </div>
        </DashboardLayout>
    )
}
;