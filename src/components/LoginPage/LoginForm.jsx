import React, { Component } from 'react';
import './../../css/Sign-Log/SignUpForm.css';
import './../../css/Sign-Log/SignUpForm.css';
import { ReactComponent as GoogleIcon } from './../Svgs/Google-SignIn.svg'
import { ReactComponent as FacebookIcon } from './../Svgs/Facebook-SignIn.svg'
import { ReactComponent as LineOr } from './../Svgs/line-or.svg'

// Actions and connect for redux
import * as ACTIONS from './../../store/actions/actions';
import { connect } from "react-redux";


class LoginForm extends Component {
    handleChange = (event) => {
        this.props.updateLoginInput(event.target.value, event.target.name)
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <div className="email input">
                        <input type="email" name="loginEmailAddress" id="email" placeholder="Email Address" value={this.props.email} onChange={this.handleChange} />
                        <i className="fa fa-envelope input-icon"></i>
                    </div>
    
                    <div className="password input">
                        <input type="password" name="loginPassword" id="password" placeholder="Password" onChange={this.handleChange} value={this.props.password} />
                        <i className="fa fa-eye-slash input-icon"></i>
                    </div>
                    <button>Log In</button>
                    <div className="line-or">
                        <div className="line"></div>
                        <p>Or Log In With</p>
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
        emailAddress: state.loginReducer.loginEmailAddress,
        password: state.loginReducer.loginPassword
    }
}

// Maps the redux action dispatchers to props object
function mapDispatchToProps(dispatch) {
    return {
       updateLoginInput: (text, tag) => dispatch(ACTIONS.login_input(text, tag)) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

