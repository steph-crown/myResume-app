import React from 'react';
import './../../css/cvIsReady.css';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import PdfCreator from './../PdfCreator';
import { PDFViewer } from '@react-pdf/renderer';
import './../../css/iframe.css'


export default function CVIsReady() {
    const history = useHistory();
    let pathWithoutPage = history.location.pathname.slice(0,-1);

    let sections = ["Contact", "Work", "Education", "Volunteer", "Skills", "Summary", "Projects", "References"]

    sections = sections.map((x, index) => (
        <div className="page" key={x}>
            <Link to={pathWithoutPage + index}>
                {x}
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
                    <h6 className="download">DOWNLOAD</h6>
                </div>
                <div className="f74 f-sm-100">
                    <div className="the-pdf" >
                        <PDFViewer>
                            <PdfCreator />
                        </PDFViewer>
                    </div>
                    
                </div>
            </div>

            <footer className="sm-none">
                <button className="footer-button">
                    TEMPLATE
                </button>
                <button className="footer-button">
                    FORMATTING
                </button>
                <button className="footer-button">
                    COLOR
                </button>
                <button className="footer-button green">SAVE</button>
            </footer>
        </div>
        
    )
}
