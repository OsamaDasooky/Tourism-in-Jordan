import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = ({ token, setToken }) => {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const loginUser = (user, pass) => {
        const data = new FormData();
        data.append("email", user);
        data.append("password", pass);

        const config = {
            method: "post",
            url: "http://127.0.0.1:8000/api/login",
            headers: {
                Accept: "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json"
            },
            data: data
        };

        axios(config)
            .then(function(response) {
                setUserData(response.data.data.user);
                setToken(response.data.data.token);
                localStorage.setItem("token", response.data.data.token);
            })
            .catch(function(error) {
                console.log(error);
            });
    };
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);

    useEffect(() => {
        if (token) {
            navigate("/laravel");
        }
    }, [token]);

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = event => {
        //Prevent page reload
        event.preventDefault();

        const { uname, pass } = document.forms[0];
        loginUser(uname.value, pass.value);
    };

    // JSX code for login form
    const renderForm = (
        <div className="form container col-lg-8">
            <form
                onSubmit={handleSubmit}
                className="my-5 mb-lg-0  pb-0 "
                style={{ textAlign: "-webkit-center" }}
            >
                <div className="col-6 ">
                    <input
                        placeholder="Username"
                        type="text"
                        name="uname"
                        className="form-control text-start mt-4"
                        required
                    />
                </div>
                <div className="col-6">
                    <input
                        placeholder="Password"
                        type="password"
                        name="pass"
                        className="form-control mt-4 text-start"
                        required
                    />
                </div>
                <div className="col-2">
                    <input
                        type="submit"
                        value={"login"}
                        className="btn btn-primary my-3 w-100"
                    />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form justify-content-center">
                <h3 className="card-title text-center">Sign In</h3>
                {renderForm}
            </div>
        </div>
    );
};
