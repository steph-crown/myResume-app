import React from 'react';
import './../../css/HomePage/Footer.css';
import links from "./../../db/footer-links";

const Footer = () => {

    let col1Links = links.col1.map(link => 
        <div className="link" key={link.name}>
            <a href="#">{link.name} &nbsp; &nbsp; <i className={link.icon + " icons"} style={{fontSize: "20px"}}></i></a>
        </div>
    );

    let col2Links = links.col2.map(link => 
        <div className="link" key={link}>
            <a href="#">{link}</a>
        </div>
    );

    let col3Links = links.col3.map(link => 
        <div className="link" key={link.name}>
            <a href="#">{link.name}&nbsp; &nbsp; <i className={link.icon + " icons"} style={{fontSize: "20px"}}></i></a>
        </div>
    );

    return (
        <div className="footer">
            <div className="logo">
                <span className="my">my</span>
                <span className="Resume">Resume</span>
            </div>
            <div className="linkings">
                <div className="col1">{col1Links}</div>
                <div className="col2">{col2Links}</div>
                <div className="col2">{col3Links}</div>
            </div>
            <p>Designed and Developed with <i className="fa fa-heart"></i> by <a href="#" style={{color: "var(--red)"}}>Steph Crown</a></p>
        </div>
    );
}

export default Footer;
