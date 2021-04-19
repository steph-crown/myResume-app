import React, { Component } from 'react';
import Contact from './Contact';
import Work from './Work';
import Education from './Education';
import profileFields from './../../db/ProfileField';
import DashboardMenu from '../Dashboard/DashboardMenu';
import { Link } from "react-router-dom";
import { Beforeunload } from 'react-beforeunload';
import './../../css/ProfileForm.css'




export default class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currPage: 0
        }
    }
    pages = [Contact, Work, Education]
    pagesStr = ["Contact", "Work", "Education", "Volunteer"]
    id = this.props.match.params.id;
    
    render() {
        const initialState = this.id === "new" ? profileFields : "Use id to get data from backend";

        const pagesJSX = this.pagesStr.map((x, index) => 
            <div className={"page " + (this.state.currPage === index ? "current-page" : "")}>
                {x}
                {console.log(this.state.currPage, index)}
                <div className="short-line"></div>
            </div>
        )
        return (
        <>
            <Beforeunload onBeforeunload={(event) => event.preventDefault()} />
            <div className="profile-form" >
                <div className="dashboard profiles">
                    <div className="md-flex">
                        <Link className="logo md" to="/">
                            <span className="my">my</span>
                            <span className="Resume">Resume</span>
                        </Link>
                        <Link className="menu-icon" to="/menu">
                            <div></div>
                            <div></div>
                            <div></div>
                        </Link>
                    </div>
                    
                    <div className="side-nav">
                        <DashboardMenu active="profiles" />
                    </div>
                        <div className="form-nav">
                            <div className="pages-md">
                                {pagesJSX}
                            </div>
                        </div>
                </div>
            </div>
        </>
            
        )
    }
}
