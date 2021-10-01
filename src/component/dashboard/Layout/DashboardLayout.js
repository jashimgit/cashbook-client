import React from 'react'
import Aside from '../shared/Aside'
import Navbar from '../shared/Navbar'

export default function DashboardLayout({children}) {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Aside />
                    <main className="col-md-10">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}
