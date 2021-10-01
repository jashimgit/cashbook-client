import React from "react";
import { Link } from "react-router-dom";
import { GoChevronRight } from 'react-icons/go';

export default function Aside() {
    return (
        <aside className="col-sm-2">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard">
                       <GoChevronRight /> Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/customer">
                    <GoChevronRight className="mr-1"/> Customer
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/payment">
                    <GoChevronRight /> Payment
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/service">
                    <GoChevronRight /> Service
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
