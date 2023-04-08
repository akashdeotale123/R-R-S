import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createDataStart } from '../Redux/Actions/DataActions';
import './form.css';
import {  useNavigate } from 'react-router-dom';


function Form() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState();
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setData(data)
        if (data.name !== "", data.email !== "", data.phone !== "", data.address !== "") {
            dispatch(createDataStart(data));
        }
        console.log("-------->", data);
    }

    function handleClick() {
        navigate('/show')
      }
    return (
        <>
            <section class="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-xl-10">
                            <div class="card rounded-3 text-black">
                                <div class="row g-0">
                                    <div class="col-lg-6">
                                        <div class="card-body p-md-5 mx-md-4">

                                            <div class="text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                    alt="logo" style={{ width: "185px" }} />
                                                <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                            </div>

                                            <form onSubmit={handleSubmit}>
                                                {/* <p>Please login to your account</p> */}

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form2Example11">Full Name</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        class="form-control"
                                                        placeholder="Name"
                                                        value={data.name}
                                                        onChange={handleChange}
                                                    />
                                                    <a style={{ color: "red" }}>{submit && !data.name && <small className="p-invalid">Name is required.</small>}</a>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form2Example11">Email</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        class="form-control"
                                                        placeholder="Email"
                                                        value={data.email}
                                                        onChange={handleChange}
                                                    />
                                                    <a style={{ color: "red" }}>{submit && !data.email && <small className="p-invalid">Email is required.</small>}</a>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form2Example11">Phone Number</label>
                                                    <input
                                                        type="phone"
                                                        id="phone"
                                                        name="phone"
                                                        class="form-control"
                                                        placeholder="Phone Number"
                                                        value={data.phone}
                                                        onChange={handleChange}
                                                    />
                                                    <a style={{ color: "red" }}>{submit && !data.phone && <small className="p-invalid">phone number is required.</small>}</a>
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label class="form-label" for="form2Example11">Address</label>
                                                    <input
                                                        type="address"
                                                        id="address"
                                                        name="address"
                                                        class="form-control"
                                                        placeholder="Address "
                                                        value={data.address}
                                                        onChange={handleChange}
                                                    />
                                                    <a style={{ color: "red" }}>{submit && !data.address && <small className="p-invalid">Address is number is required.</small>}</a>

                                                </div>


                                                <div class="text-center pt-1 mb-5 pb-1">
                                                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Submit</button>

                                                </div>
                                            </form>

                                            


                                        </div>
                                    </div>
                                    <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 class="mb-4">We are more than just a company</h4>
                                            <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <br/>
                                                <br/>
                                        <a style={{textAlign:'center'}} ><button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={handleClick}>Show Data</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Form;