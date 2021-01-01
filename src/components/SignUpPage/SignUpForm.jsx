import React, { Component } from 'react';
import './../../css/Sign-Log/SignUpForm.css';
import { ReactComponent as GoogleIcon } from './../Svgs/Google-SignIn.svg'
import { ReactComponent as FacebookIcon } from './../Svgs/Facebook-SignIn.svg'
import { ReactComponent as LineOr } from './../Svgs/line-or.svg'


class SignUpForm extends Component {
    render() {
        return (
            <form action="">
                <div className="name input">
                    <input type="text" name="" id="" placeholder="Name" />
                    {/* <div className="input-icon"> */}
                        <i className="fa fa-user input-icon"></i>
                    {/* </div> */}
                </div>
                
                <div className="email input">
                    <input type="email" name="" id="" placeholder="Email Address" />
                    {/* <div className="input-icon"> */}
                        <i className="fa fa-envelope input-icon"></i>
                    {/* </div> */}
                </div>

                <div className="password input">
                    <input type="password" name="" id="" placeholder="Password" />
                    {/* <div className="input-icon"> */}
                        <i className="fa fa-eye-slash input-icon"></i>
                    {/* </div> */}
                </div>
                <button>Sign Up</button>
                <LineOr className="line-or" />
                <div className="auth-buttons">
                    <div className="google">
                        <GoogleIcon className="icon" />
                        <h5>Google</h5>
                    </div>
                    <div className="facebook">
                        <FacebookIcon className="icon" />
                        <h5>Facebook</h5>
                    </div>
                </div>
            </form>
        );
    }
}

export default SignUpForm;
