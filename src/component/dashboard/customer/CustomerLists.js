import React, { useContext } from "react";

import { AppContext } from './../../../context/AppContext';

export default function CustomerLists() {
    const {customers} = useContext(AppContext);

    return (
        <div className="col-sm-12 my-2">
            <h4 className="lead my-1">All customer List</h4>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>address</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {!customers
                        ? "<h3>Loading.....<h3>"
                        : customers.map((item, index) => {
                              return (
                                  <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>{item.customerName}</td>
                                      <td>{item.address}</td>
                                      <td>{item.phone}</td>
                                  </tr>
                              );
                          })}
                </tbody>
            </table>
        </div>
    );
}
