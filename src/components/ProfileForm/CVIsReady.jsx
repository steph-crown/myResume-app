import React, {useState} from 'react';
import './../../css/cvIsReady.css';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './../../css/iframe.css';
import { Template1, Template2 } from "./../../Templates";
import ColorBox from './../ColorBox';



export default function CVIsReady() {
    const history = useHistory();
    let pathWithoutPage = history.location.pathname.slice(0,-1);
    const [colorVisible, setColorVisible] = useState("");

    const setColorVisibility = () => {
        setColorVisible(colorVisible === "" || colorVisible === "hide" ? "show" : "hide")
    }

    const handleColorChange = (color) => {
        console.log(color);
        setColorVisible("hide")
    }



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
                    <button className="download" type="button">
                        DOWNLOAD   
                    </button>


                </div>
                <div className="f74 f-sm-100">
                    <div className="sm-show change-template">
                        <h6>CHANGE TEMPLATE</h6>
                    </div>
                    <div className="the-pdf" >
                        <Template1 />
                    </div>
                    <div className="sm-show f-sm-100 show-block">
                        <button className="res-sections">DOWNLOAD</button>







                        <button className="res-sections save">SAVE RESUME</button>
                        <button></button>
                    </div>
                </div>
            </div>

            <div className={"color-box-container " + colorVisible}>
                <ColorBox changeColor={handleColorChange} />
            </div>

            <footer>
                <button className="footer-button sm-none">
                    TEMPLATE
                </button>
                
                <button className={"footer-button " + (colorVisible === "" || colorVisible === "hide" ? "" : "visible")} type="button" onClick={setColorVisibility}>
                    COLOR
                    <i className={"fontawesome fa " + (colorVisible === "" || colorVisible === "hide" ? "fa-caret-down" : "fa-caret-up")}></i>
                </button>
                <button className="footer-button green sm-none">SAVE</button>
            </footer>
        </div>
    )
}
