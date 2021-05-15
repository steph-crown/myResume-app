import React from 'react';
import './../../css/cvIsReady.css';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// import PdfCreator from './../PdfCreator';
// import { PDFViewer } from '@react-pdf/renderer';
import './../../css/iframe.css';
import { Template1, Template2 } from "./../../Templates";


export default function CVIsReady() {
    const history = useHistory();
    let pathWithoutPage = history.location.pathname.slice(0,-1);

    let sections = [
        ["Contact", "fa fa-address-book-o"], 
        ["Work", "fa fa-user"], 
        ["Education", "fa fa-graduation-cap"], 
        ["Volunteer", "fas fa-hand-holding-heart"], 
        ["Skills","fa fa-list-ol"], 
        ["Summary", "fa fa-bars"], 
        ["Projects", "far fa-file-code"], 
        ["References", "fa fa-check"]
    ]
        

    sections = sections.map((x, index) => (
        <div className="page" key={x}>
            <i className={x[1] + " fontawesome"}></i>
            <Link to={pathWithoutPage + index} >
                {x[0]}
            </Link>
        </div>
    ))
    return (
        <div className="a-ready-cv">
            <div className="form-flex">
                <div className="f24 f-sm-100 sm-none">
                    <h6>RESUME SECTIONS</h6>
                    <div className="section-links">
                        {sections}
                    </div>
                    <div className="a-short-line"></div>
                    <button className="download">DOWNLOAD</button>
                </div>
                <div className="f74 f-sm-100">
                    <div className="sm-show change-template">
                        <h6>CHANGE TEMPLATE</h6>
                    </div>
                    <div className="the-pdf" >
                        <Template1 />
                    </div>
                    <div className="sm-show f-sm-100 show-block">
                        <button className="res-sections">RESUME SECTIONS</button>
                        <button className="res-sections save">SAVE RESUME</button>
                        <button></button>
                    </div>
                </div>
            </div>

            <footer>
                <button className="footer-button sm-none">
                    TEMPLATE
                </button>
                <button className="footer-button">
                    FORMATTING
                </button>
                <button className="footer-button">
                    COLOR
                </button>
                <button className="footer-button green sm-none">SAVE</button>
            </footer>
        </div>
    )
}
