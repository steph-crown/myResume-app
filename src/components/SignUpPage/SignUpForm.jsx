import React, {useState} from 'react';
import './../../css/Sign-Log/SignUpForm.css';
import { ReactComponent as GoogleIcon } from './../Svgs/Google-SignIn.svg'
import { ReactComponent as FacebookIcon } from './../Svgs/Facebook-SignIn.svg';
import { useHistory } from 'react-router-dom';

import Loader from './../Loader';

// Actions and connect for redux
import * as ACTIONS from './../../store/actions/actions';
import { connect } from "react-redux";


function SignUpForm(props) {
    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        props.updateSignupInput(event.target.value, event.target.name)
    }
    const history = useHistory()
    const HandleSubmit = (event) => {
        event.preventDefault();
        // Starts a spinner
        setLoading(true)

        props.updateError('')
        // Makes request to api
        const {name, email, password} = props;
        props.signUp('/user/signup', {
            name,
            email,
            password
        });

    }

    
    return (
        <form action="" onSubmit={HandleSubmit} noValidate={true}>

            {/* Shows error alerts */}
            {props.errMessage && <div className="err-box" >
                <p><i className="fa fa-info-circle"></i>{props.errMessage}</p>
            </div>}

            {/* Checks if details is gotten and moves to dashboard */}
            {props.userDetails ? 
                    history.push('/dashboard') :
                    null
            }

            <div className="name input">
                <input type="text" name="signupName"  placeholder="Name" id="name" value={props.name} onChange={handleChange} />
                <i className="fa fa-user input-icon"></i>
            </div>
            
            <div className="email input">
                <input type="email" name="signupEmailAddress"  id="emailAddress" placeholder="Email Address" value={props.email} onChange={handleChange} />
                <i className="fa fa-envelope input-icon"></i>
            </div>

            <div className="password input">
                <input type="password" name="signupPassword" id="password" placeholder="Password" value={props.password} onChange={handleChange} />
                <i className="fa fa-eye-slash input-icon"></i>
            </div>

            {/* Loading shows after button is clicked and no errMessage */}
            <div className="loading" style={{display: loading === true && !props.errMessage ? "block": "none"}}>
                <Loader />
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



// Maps the redux state to props object
function mapStateToProps(state) {
    return {
        name: state.signupReducer.signupName,
        email: state.signupReducer.signupEmailAddress,
        password: state.signupReducer.signupPassword,
        userDetails: state.userDetailsReducer.userDetails,
        errMessage: state.errorReducer.errMessage
    }
}

// Maps the redux action dispatchers to props object
function mapDispatchToProps(dispatch) {
    return {
       updateSignupInput: (text, tag) => dispatch(ACTIONS.signup_input(text, tag)),
       signUp: (url, data) => dispatch(ACTIONS.get_user_details(url, data)),
       updateError: (errMessage)=>dispatch(ACTIONS.error(errMessage))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
