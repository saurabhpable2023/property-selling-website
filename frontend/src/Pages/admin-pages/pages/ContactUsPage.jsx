// src/pages/DashboardPage.js

import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';

const ContactUsPage = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
                <Navbar />
                <div className="p-4 mt-5">
                    <ContactUs/>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
