import { Link } from "react-router-dom";


import React from 'react'

export default function index({pageNo, pagesStr, pathWithoutPage}) {
    return (
        <div className="button-group">
            <div className={"left-group " + (pageNo === pagesStr.length - 1 ? "no-next" : "")}>
                <Link to={pathWithoutPage + (pageNo + 1)}>
                    <button className="next-button">Next: {pagesStr[pageNo + 1]}</button>
                </Link>
                <button type="submit" className={"save-button "}>Save</button>
            </div>
            <div className="right-group">
                <button className="view-button">View CV</button>
            </div>
        </div>
    )
}

