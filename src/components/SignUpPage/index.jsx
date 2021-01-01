import React from 'react';
import "./../../css/Sign-Log/index.css";
import { Link } from "react-router-dom";
import AbsContainer from './AbsContainer'
import './../../css/Sign-Log/index.css';
import NavBar from './../HomePage/NavBar';
import SignUpForm from './SignUpForm'

const index = () => {
    return (
        <div className="sign-container">
            <div className="cont">
            <AbsContainer className="" />

            </div>
            <div className="navbar">
                <NavBar />
            </div>
            <main>
                <div className="left-part">
                    <h1>Sign Up for <br /> 
                        <span>my</span>
                        <span>Resume</span>
                    </h1>
                    <h5>
                        If you already have an account, You can <Link to="/login" className="a">Login Here</Link>
                    </h5>
                </div>
                <div className="form">
                    <SignUpForm />
                </div>
            </main>
            
        </div>
    );
}

export default index;
