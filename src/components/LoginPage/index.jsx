import React from 'react';
import "./../../css/Sign-Log/index.css";
import { Link } from "react-router-dom";
import AbsContainer from './../SignUpPage/AbsContainer'
import './../../css/Sign-Log/index.css';
import NavBar from './../HomePage/NavBar';
import SignUpForm from './LoginForm'
import LoginForm from './LoginForm';

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
                    <h1>Welcome <br /> Back
                    </h1>
                    <h5>
                    If you don’t have an account, You can <Link to="/login" className="a">Sign Up Here</Link>
                    </h5>
                </div>
                <div className="form">
                    <LoginForm />
                </div>
            </main>
            
        </div>
    );
}

export default index;
