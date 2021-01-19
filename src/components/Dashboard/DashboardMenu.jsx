import React from 'react';
import './../../css/Dashboard/DashboardMenu.css';
import { Link } from "react-router-dom";

const DashboardMenu = (props) => {

    return (
        <div className="dashboard-menu">
            <Link className="logo" to="/">
                <span className="my">my</span>
                <span className="Resume">Resume</span>
            </Link>
            <div className={"nav-text " + (props.active==="profiles"?"is-active":"")}>
                <div className="dash-icon">
                    <i className="fa fa-user"></i>
                </div>
                <Link to="/dashboard"><h6>Profiles</h6></Link>
            </div>
            <div className={"nav-text "+(props.active==="downloads"?"is-active":"")}>
                <div className="dash-icon">
                    <i className="fa fa-home"></i>
                </div>
                <Link to="/downloads"><h6>Downloads</h6></Link>
            </div>
            <div className="nav-text sect">
                <div className="dash-icon">
                    <i className="fa fa-home"></i>
                </div>
                <Link to="/"><h6>Home</h6></Link>
            </div>
            <div className="nav-text sect">
                <div className="dash-icon">
                    <i className="fa fa-home"></i>
                </div>
                <Link to="/"><h6>Log Out</h6></Link>
            </div>
            <div className="nav-text sect">
                <div className="dash-icon">
                    <i className="fa fa-home"></i>
                </div>
                <Link to=""><h6>Help</h6></Link>
            </div>
        </div>
    );
}

export default DashboardMenu;
