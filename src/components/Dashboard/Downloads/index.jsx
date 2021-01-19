import React from 'react';
import DashboardMenu from '../DashboardMenu';
import dashboard from './../../../db/dashboard';
import './../../../css/Dashboard/dashboard.css'
import { Link } from "react-router-dom";



const index = () => {
    console.log(dashboard); 
    return (
        <div className="dashboard downloads">
            <div className="side-nav">
                <DashboardMenu active="downloads" />
            </div>
            <Link className="menu-icon" to="/menu">
                <div></div>
                <div></div>
                <div></div>
            </Link>
        </div>
    );
}

export default index;
