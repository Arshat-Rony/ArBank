import React from 'react';
import Header from '../../components/Header';
import { Outlet } from "react-router-dom"
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation()

    return (
        <div style={{ marginTop: "100px", overflowX: "none" }}>
            <Header></Header>
            <div className="row container-fluid mx-auto p-0">
                <div className="col-md-2 dashboard_link_section py-4 py-md-0">
                    <Link to="/dashboard/myprofile" className={`d-block py-3 rounded-3 py-md-2 dashboard_link text-center mt-4 text-decoration-none ${location.pathname === "/dashboard/myprofile" || location.pathname === "/dashboard" ? "bg-danger" : "bg-white text-dark"}`}>My Profile</Link>
                    <Link to="/dashboard/transactions" className={`d-block py-3 rounded-3 py-md-2 dashboard_link text-center mt-4 text-decoration-none ${location.pathname === "/dashboard/transactions" ? "bg-danger" : "bg-white text-dark"}`}>My Transactions</Link>
                    <Link to="/dashboard/loans" className={`d-block py-3 rounded-3 py-md-2 dashboard_link text-center mt-4 text-decoration-none ${location.pathname === "/dashboard/loans" ? "bg-danger" : "bg-white text-dark"}`}>My Loans</Link>
                    <Link to="/dashboard/users" className={`d-block py-3 rounded-3 py-md-2 dashboard_link text-center mt-4 text-decoration-none ${location.pathname === "/dashboard/users" ? "bg-danger" : "bg-white text-dark"}`}>All Users</Link>
                    <Link to="/dashboard/allloans" className={`d-block py-3 rounded-3 py-md-2 dashboard_link text-center mt-4 text-decoration-none ${location.pathname === "/dashboard/allloans" ? "bg-danger" : "bg-white text-dark"}`}>All Loans</Link>
                </div>

                <div className="col-md-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;