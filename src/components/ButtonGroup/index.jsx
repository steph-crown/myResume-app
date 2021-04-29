import React from 'react'

export default function ButtonGroup({pageNo, pagesStr, pathWithoutPage}) {

    return (
        <div className="button-group">
            <div className={"left-group " + (pageNo === pagesStr.length - 1 ? "no-next" : "")}>
                <button type="submit" className="next-button">Next: {pagesStr[pageNo + 1]}</button>
                <button type={(pageNo === pagesStr.length - 1 ? "submit" : "button")} className={"save-button "}>Save</button>
            </div>
            <div className="right-group">
                <button type="button" className="view-button">View CV</button>
            </div>
        </div>
    )
}