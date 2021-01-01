import React, { Component } from 'react';
import './../../css/Sign-Log/SignUpForm.css'

class SignUpForm extends Component {
    render() {
        return (
            <form action="">
                {/* <div className="name"> */}
                    <input type="text" name="" id="" placeholder="Name" />
                {/* </div> */}
                
                <div className="email">
                    <input type="email" name="" id="" placeholder="Email Address" />
                </div>

                <div className="password">
                    <input type="password" name="" id="" placeholder="Password" />
                </div>

                <button>Sign Up</button>
            </form>
        );
    }
}

export default SignUpForm;
