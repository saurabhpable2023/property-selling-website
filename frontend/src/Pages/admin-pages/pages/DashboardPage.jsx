// src/pages/DashboardPage.js

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUserDetails } from '../../../services/admin';
const AdminDashboardPage = () => {
    const [data, setData] = useState("");
    const [Properities, SetProperities] = useState([]);
    const [cookie, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
        getUserDetails().then((res) => {
            if (res.data.status === "Success") {
                setData(res.data.data);
            } else {
                toast.error(res.status);
            }
        })
        console.log(data);
    }, []);
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
                <Navbar />
                <div className="p-4 mt-5">
                    <Dashboard name={data.firstName+" "+data.lastName} />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
