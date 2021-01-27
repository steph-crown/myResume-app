import React from 'react';
import { ReactComponent as Photo } from "./../../Svgs/Male.svg";
import './../../../css/Dashboard/Profile.css'

const Profile = (props) => {
    let { personal } = props
    return (
        <div className="profile">
            <div className="header">
                <div className="photo">
                    <Photo fill="#06a81c" className="icon" />
                </div>
                <div className="right-part">
                    <div className="name-and-menu">
                        <h3>{personal.firstName + " " + personal.lastName.slice(0, 1) + "."}</h3>
                        <div className="menu">
                            <i className="fa fa-ellipsis-v"></i>
                        </div>
                    </div>
                    
                    <div className="email">
                        <h4>{personal.email}</h4>
                    </div>

                    <div className="date">
                        <i className="fa fa-clock-o"></i>
                        <p>{props.lastUpdated}</p>
                    </div>
                </div>
            </div>

            <h2 className="profession">{personal.profession}</h2>

            <div className="profile-buttons">

            </div>
        </div>
    );
}

export default Profile;
