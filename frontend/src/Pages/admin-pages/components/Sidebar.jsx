// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="bg-dark text-white vh-100 position-fixed" style={{ width: '250px', left: '0', top: '10%' }}>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/admin/dashboard" className="nav-link text-white">
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/users" className="nav-link text-white">
                        Users
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/property" className="nav-link text-white">
                        Properties
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
