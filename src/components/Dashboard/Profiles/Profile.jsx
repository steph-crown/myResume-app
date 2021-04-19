import React from 'react';
import { ReactComponent as Photo } from "./../../Svgs/Male.svg";
import './../../../css/Dashboard/Profile.css'
import prettifyTime from "./../../../utilities/prettifyTime"
import { Link } from "react-router-dom";

const Profile = (props) => {
    let { personal, _id } = props
    return (
        <div className="profile">
            <div className="menu">
                <i className="fa fa-ellipsis-v"></i>
            </div>
            <div className="header">
                <div className="photo">
                    <Photo fill="#06a81c" className="icon" />
                </div>
                <div className="right-part">
                    <div className="name">
                        <h3>{personal.firstName + " " + personal.lastName.slice(0, 1) + "."}</h3>
                        
                    </div>
                    
                    <div className="email">
                        <h4>{personal.email}</h4>
                    </div>

                    
                </div>
            </div>

            <h2 className="profession">{personal.profession}</h2>
            <div className="date">
                <i className="fa fa-clock-o"></i>
                <p>{prettifyTime(props.lastUpdated)}</p>
            </div>

            <div className="profile-buttons">
                <Link to={`/edit/${_id}`}>
                    <div className="button">Edit</div>
                </Link>
                <div className="button">View CV</div>
            </div>
        </div>
    );
}

export default Profile;
