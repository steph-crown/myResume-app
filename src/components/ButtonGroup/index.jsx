import { Link } from "react-router-dom";


import React from 'react'

export default function ButtonGroup({pageNo, pagesStr, pathWithoutPage}) {

    return (
        <div className="button-group">
            <div className={"left-group " + (pageNo === pagesStr.length - 1 ? "no-next" : "")}>
                {/* <Link to={pathWithoutPage + (pageNo + 1)}> */}
                    <button type="submit" className="next-button">Next: {pagesStr[pageNo + 1]}</button>
                {/* </Link> */}
                <button type="button" className={"save-button "}>Save</button>
            </div>
            <div className="right-group">
                <button type="button" className="view-button">View CV</button>
            </div>
        </div>
    )
}

