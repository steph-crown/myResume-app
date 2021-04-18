import React from 'react';
import DashboardMenu from '../DashboardMenu';
import dashboard from './../../../db/dashboard';
import './../../../css/Dashboard/dashboard.css'
import { Link } from "react-router-dom";
import Profile from './../Profiles/Profile';



const index = () => {
    let Downloads = dashboard.downloads && dashboard.downloads.length > 0 ? dashboard.downloads.map(x => 
        <Profile key={x._id} id={x._id} {...x} />
    ) : "No Downloads yet, When you download the CV from any profile, it saves here"
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
                {Downloads}
            </div>

            <div className="create-profile">
                +
            </div>
            <div className="bottom-nav md-flex">
                <Link to="/dashboard">New Profile</Link>
                <Link to="/downloads">View Downloads</Link>
            </div>
        </div>
    );
}

export default index;
