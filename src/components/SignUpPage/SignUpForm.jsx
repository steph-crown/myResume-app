import React, { Component } from 'react';
import './../../css/Sign-Log/SignUpForm.css';
import { ReactComponent as GoogleIcon } from './../Svgs/Google-SignIn.svg'
import { ReactComponent as FacebookIcon } from './../Svgs/Facebook-SignIn.svg';

// Actions and connect for redux
import * as ACTIONS from './../../store/actions/actions';
import { connect } from "react-redux";


class SignUpForm extends Component {
    handleChange = (event) => {
        this.props.updateSignupInput(event.target.value, event.target.name)
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <div className="name input">
                    <input type="text" name="signupName"  placeholder="Name" id="name" value={this.props.name} onChange={this.handleChange} />
                    <i className="fa fa-user input-icon"></i>
                </div>
                
                <div className="email input">
                    <input type="email" name="signupEmailAddress"  id="emailAddress" placeholder="Email Address" value={this.props.emailAddress} onChange={this.handleChange} />
                    <i className="fa fa-envelope input-icon"></i>
                </div>

                <div className="password input">
                    <input type="password" name="signupPassword" id="password" placeholder="Password" value={this.props.password} onChange={this.handleChange} />
                    <i className="fa fa-eye-slash input-icon"></i>
                </div>
                <button>Sign Up</button>




                <div className="line-or">
                    <div className="line"></div>
                    <p>Or Sign Up With</p>
                    <div className="line"></div>
                </div>
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



// Maps the redux state to props object
function mapStateToProps(state) {
    return {
        name: state.signupReducer.signupName,
        emailAddress: state.signupReducer.signupEmailAddress,
        password: state.signupReducer.signupPassword
    }
}

// Maps the redux action dispatchers to props object
function mapDispatchToProps(dispatch) {
    return {
       updateSignupInput: (text, tag) => dispatch(ACTIONS.signup_input(text, tag)) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
