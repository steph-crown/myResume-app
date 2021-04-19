import React from 'react';
import DashboardMenu from '../DashboardMenu';
import dashboard from './../../../db/dashboard';
import './../../../css/Dashboard/dashboard.css'
import { Link } from "react-router-dom";
import Profile from './Profile';




const index = () => {
    let Profiles = dashboard.profiles ? dashboard.profiles.map(x => 
        <Profile key={x._id} id={x._id} {...x} />
    ) : "No Profile yet, Click + New profile to create a profile"
    return (
        <div className="dashboard profiles">
            <div className="md-flex">
                <Link className="logo md" to="/">
                    <span className="my">my</span>
                    <span className="Resume">Resume</span>
                </Link>
                <Link className="menu-icon" to="/menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </Link>
            </div>
            
            <div className="side-nav">
                <DashboardMenu active="profiles" />
            </div>
            


            <div className="profiles-body">
                {Profiles}
            </div>

            <div className="create-profile">
                +
            </div>
            {/* <div className="bottom-nav md-flex">
                <Link to="/dashboard">New Profile</Link>
                <Link to="/downloads">View Downloads</Link>
            </div> */}
        </div>
    );
}

export default index;
