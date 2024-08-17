// src/components/Dashboard.js

import React from 'react';
import BarChart from './Charts/BarChart';
import LineChart from './Charts/LineChart';

const Dashboard = ({ name }) => {
    return (
        <div className="container-fluid">
            <div className="row mt-5 pt-4">
                <div className="col-12 mb-3">
                    <h2>Welcome, {name}!</h2>
                </div>
                <div className="col-md-4">
                    <div className="card bg-light mb-3">
                        <div className="card-header">Total Users</div>
                        <div className="card-body">
                            <h5 className="card-title">1,245</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-light mb-3">
                        <div className="card-header">Total Sales</div>
                        <div className="card-body">
                            <h5 className="card-title">₹ 1,23,45,678</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card bg-light mb-3">
                        <div className="card-header">Sales by Month</div>
                        <div className="card-body">
                            <BarChart />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card bg-light mb-3">
                        <div className="card-header">Monthly Trends</div>
                        <div className="card-body">
                            <LineChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
