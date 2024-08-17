// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container-fluid text-center">
            <h1 className="my-5">Welcome to Our Property Selling Platform</h1>
            <p>Your gateway to buying and selling properties with ease.</p>
            <div className="my-4">
                <Link to="/login" className="btn btn-primary btn-lg mx-2">Login</Link>
                <Link to="/register" className="btn btn-secondary btn-lg mx-2">Register</Link>
            </div>
        </div>
    );
};

export default HomePage;
