import React, { Component } from 'react';
import Contact from './Contact';
import Work from './Work';
import Education from './Education';
import profileFields from './../../db/ProfileField'


export default class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currPage: 0
        }
    }
    pages = [Contact, Work, Education]
    id = this.props.match.params.id;
    
    render() {
        const initialState = this.id === "new" ? profileFields : "Use id to get data from backend";

        return (
            <div className="profile-form">
                
            </div>
        )
    }
}
