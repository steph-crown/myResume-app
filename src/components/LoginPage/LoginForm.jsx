import React from 'react';
import './../../css/Sign-Log/SignUpForm.css';
import './../../css/Sign-Log/SignUpForm.css';
import { ReactComponent as GoogleIcon } from './../Svgs/Google-SignIn.svg'
import { ReactComponent as FacebookIcon } from './../Svgs/Facebook-SignIn.svg'
import { ReactComponent as LineOr } from './../Svgs/line-or.svg'



const LoginForm = () => {
    return (
        <form action="">
                <div className="email input">
                    <input type="email" name="" id="" placeholder="Email Address" />
                    <i className="fa fa-envelope input-icon"></i>
                </div>

                <div className="password input">
                    <input type="password" name="" id="" placeholder="Password" />
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

