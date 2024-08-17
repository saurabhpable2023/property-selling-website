// src/pages/LogoutPage.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoutPage.css'; // Import custom CSS for additional styling
import { toast } from 'react-toastify';

const LogoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Handle logout logic here
        // Redirect to home or login page after logout
        toast.success("Logout Successful")
        sessionStorage.clear()
        navigate('/'); // Redirect to the home page or login page
    }, []);

    return (
        <div className="container-fluid logout-container text-center">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <img src="formimage.jpg" alt="Logout Background" className="card-img-top" />
                        <div className="card-body">
                            <h2 className="card-title">Logging Out...</h2>
                            <p>Please wait while we log you out.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoutPage;
