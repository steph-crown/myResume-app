import React from 'react';
import { ReactComponent as Male } from "./../Svgs/Male.svg";
import { ReactComponent as Female } from "./../Svgs/Female.svg";
import './../../css/HomePage/ReviewBox.css';


const ReviewBox = (props) => {
    return (
        <div className="review-box">
            {props.prop.gender === 'male' ? <Male fill="#F28B0C" className="icon"/> : <Female fill="#F28B0C" className="icon" />}
            <h3>{props.prop.firstName}</h3>
            <p>{props.prop.review}</p>
        </div>
    );
}

export default ReviewBox;
