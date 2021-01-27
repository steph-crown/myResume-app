import React from 'react';
import DashboardMenu from '../DashboardMenu';
import dashboard from './../../../db/dashboard';
import './../../../css/Dashboard/dashboard.css'
import { Link } from "react-router-dom";
import Profile from './Profile';




const index = () => {
    let Profiles = dashboard.profiles.map(x => 
        <Profile key={x._id} id={x._id} {...x} />
    )
    // console.log(dashboard);
    return (
        <div className="dashboard profiles">
            <div className="side-nav">
                <DashboardMenu active="profiles" />
            </div>
            <Link className="menu-icon" to="/menu">
                <div></div>
                <div></div>
                <div></div>
            </Link>


            <div className="profiles-body">
                {Profiles}
            </div>
        </div>
    );
}

export default index;
