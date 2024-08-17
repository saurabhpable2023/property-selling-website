// src/pages/AboutUsPage.js

import React from 'react';

const AboutUs = () => {
    return (
        <div className="container-fluid">
            <h2 className="my-4">About Us</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Our Story</h5>
                    <p className="card-text">
                        Welcome to our property selling platform. We are committed to providing a seamless experience for buying and selling properties.
                    </p>
                    <p className="card-text">
                        Our team consists of dedicated professionals with extensive experience in the real estate industry. We prioritize customer satisfaction and aim to make your property transactions smooth and efficient.
                    </p>
                    <h5 className="card-title">Our Mission</h5>
                    <p className="card-text">
                        Our mission is to connect buyers and sellers through a user-friendly platform that offers the best possible service and tools for property transactions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
