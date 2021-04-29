import React, { Component } from 'react';
import Contact from './Contact';
import Work from './Work';
import Education from './Education';
import profileFields from './../../db/ProfileField';
import DashboardMenu from '../Dashboard/DashboardMenu';
import { Link } from "react-router-dom";
import { Beforeunload } from 'react-beforeunload';
import './../../css/ProfileForm.css';
import Volunteer from './Volunteer';
import Skills from './Skills';
import Summary from './Summary';



export default class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currPage: parseInt(this.props.match.params.page)
        }
    }
    pages = [Contact, Work, Education, Volunteer, Skills, Summary]
    pagesStr = ["Contact", "Work", "Education", "Volunteer", "Skills", "Summary"]
    id = this.props.match.params.id;

    
    render() {
        
        let pageNo = parseInt(this.props.match.params.page)
        console.log(pageNo);
        if (pageNo > this.pagesStr.length - 1  ||  pageNo < 0) {
            return <p>Page Not Found</p>
        }
        
        const CurrComp = this.pages[pageNo]
        const initialState = this.id === "new" ? profileFields : "Use id to get data from backend";
        const pagesJSX = this.pagesStr.map((x, index) => 
            <div className={"page " + (pageNo === index ? "current-page" : "")} >
                {console.log(this.state.currPage)}
                
                {x}
                <div className={index !== this.pagesStr.length - 1 ? "short-line" : ""}>
                </div>
            </div>
        )

        const pagesDotsJSX = this.pagesStr.map((x, index) => 
            <div className={"pages-dot " + (pageNo === index ? "current-page-sm" : "")}>
            </div>
        )

        const goBack = () => {
            const history = this.props.history
            history.goBack();
        }
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

                    <svg onClick={goBack} viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>


                    <div className="form-nav-sm">
                        
                        <div className="pages-sm">
                            <h5>{this.pagesStr[pageNo]}</h5>
                            <div className="pages-dot-container">
                                {pagesDotsJSX}
                            </div>
                        </div>
                    </div>

                    <div className="form-container">
                        <CurrComp initialState={initialState} pagesStr={this.pagesStr} pageNo={pageNo} />
                        
                    </div>

                    
                </div>
            </div>
        </>
            
        )
    }
}
