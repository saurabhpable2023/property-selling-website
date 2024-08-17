// src/pages/DashboardPage.js

import React from 'react';
import AboutUs from '../components/AboutUs';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const AboutUsPage = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
                <Navbar />
                <div className="p-4 mt-5">
                    <AboutUs/>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
