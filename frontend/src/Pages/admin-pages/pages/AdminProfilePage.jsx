// src/pages/AdminProfilePage.js

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { getUserDetails } from '../../../services/admin';
import { toast } from 'react-toastify';

const AdminProfilePage = () => {
    // Dummy admin data for demonstration
    const [admin, setAdmin] = useState("");
    useEffect(() => {
        getUserDetails().then((res) => {
            if (res.data.status === "Success") {
                setAdmin(res.data.data);
            } else {
                toast.error(res.status);
            }
        })
    }, []);

    return (
      <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
                <Navbar />
        <div className="container-fluid">
            <h2 className="my-4">Admin Profile</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Profile Information</h5>
                    <p><strong>User ID:</strong> {admin.id}</p>
                    <p><strong>Full Name:</strong> {admin.firstName+" "+admin.lastName}</p>
                    <p><strong>Email:</strong> {admin.email}</p>
                    <p><strong>Phone:</strong> {admin.phoneNumber}</p>
                    <p><strong>Address:</strong> {admin.city+" "+admin.state}</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default AdminProfilePage;
