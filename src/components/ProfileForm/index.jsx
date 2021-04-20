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

    changePage(index) {
        this.setState({
            currPage: index
        })
    }
    
    render() {
        const initialState = this.id === "new" ? profileFields : "Use id to get data from backend";

        const pagesJSX = this.pagesStr.map((x, index) => 
            <div className={"page " + (this.state.currPage === index ? "current-page" : "")} onClick={(e)=> {this.changePage(index)}}>
                {x}
                <div className={index !== this.pagesStr.length - 1 ? "short-line" : ""}></div>
            </div>
        )

        const pagesDotsJSX = this.pagesStr.map((x, index) => 
        
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
                        <div className="form-nav-md">
                            <div className="pages-md">
                                {pagesJSX}
                            </div>
                        </div>

                        <div className="form-nav-sm">
                            <div className="pages-sm">
                                <h5>{this.pagesStr[this.state.currPage]}</h5>
                            </div>
                        </div>
                </div>
            </div>
        </>
            
        )
    }
}
