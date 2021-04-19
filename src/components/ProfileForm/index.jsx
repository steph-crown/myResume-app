import React, { Component } from 'react';
import Contact from './Contact';
import Work from './Work';
import Education from './Education'


export default class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currPage: 0
        }
    }
    pages = [Contact, Work, Education]

    render() {
        return (
            <div className="profile-form">
                {console.log(this.props.match)}
            </div>
        )
    }
}
