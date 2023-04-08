import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSingleDataStart ,deleteSingleDataStart } from '../Redux/Actions/DataActions';
import { useNavigate } from 'react-router-dom';

export default function ShowData() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const adminData = useSelector((state) => state?.admin?.getData);
    console.log("adminData===>", adminData);
    useEffect(() => {
        dispatch(getSingleDataStart());
    }, []);

    function handleClick() {
        navigate('/')
    }

    const handleDelete = (id) => {
           dispatch(deleteSingleDataStart(id));  
    };
    
    return (
        <div>
            <div class="container py-5 h-100">
                <h1>Show Data</h1>
                <table class="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email 3</th>
                            <th>Phone Number 3</th>
                            <th>Address</th>
                            <th>Delete</th>
                            <th>Edit</th>
                            {/* add more column headings as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* use a map function to iterate over the data and generate table rows */}
                        {adminData.map((item, index) => (
                            <tr key={index} >
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td><button type="button" class="btn btn-danger"   onClick={() => handleDelete(item.id)}>Delete</button></td>
                                <td><button type="button" class="btn btn-warning" navigate >Edit</button></td>
                                {/* add more cells as needed for additional fields */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" class="btn btn-primary" onClick={handleClick}>Back</button>
            </div>
        </div>
    )
}
