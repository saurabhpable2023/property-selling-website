// src/pages/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import custom CSS for additional styling
import { loginAdmin } from '../../../services/methods';
import { toast } from 'react-toastify';
import { TbEye } from 'react-icons/tb';
import { GoEyeClosed } from 'react-icons/go';
import { useCookies } from 'react-cookie';
import loginImg from '../login.png'

const AdminLoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [cookie, setCookie] = useCookies(["token"]);

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email and password
        const isValidEmail = validateEmail(data.email);
        const isValidPassword = validatePassword(data.password);

        if (isValidEmail && isValidPassword) {
            // Show success toast
            const res = await loginAdmin(data.email, data.password);

            if (res.data.status === "Success") {
                console.log(res.data)
                setCookie("token", res.data.data);
                console.log(cookie);
                toast.success("Logged In...");
                navigate("/admin/dashboard");

            } else {
                toast.error(res.data.status);
            }
        }
    };

    const validateEmail = (email) => {
        if (data.email.length === 0) {
            toast.error("Please enter a valid email address");
            return false;
        }
        return true;
    };

    const validatePassword = (password) => {
        if (!password) {
            toast.error("Please enter a password");
            return false;
        }
        return true;
    };

    return (
        <div>
            <div className="container-fluid login-container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-md-6 col-lg-4">
                        <div className="card shadow-lg">
                            <img src={loginImg} alt="Login Background" className="card-img-top" />
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Login</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <div className="form-label">Username</div>
                                        <input
                                            onChange={handleOnChange}
                                            type="input"
                                            name="email"
                                            value={data.email}
                                            placeholder="Enter Your Username"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter Your Password"
                                            name="password"
                                            value={data.password}
                                            onChange={handleOnChange}
                                            className="form-control"
                                        />
                                        <div
                                            onClick={() => setShowPassword((prev) => !prev)}
                                            className="position-absolute end-0 me-2"
                                            style={{ cursor: "pointer" }}
                                        >
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
