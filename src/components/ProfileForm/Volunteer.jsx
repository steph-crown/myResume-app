import React from 'react';
import { useHistory } from "react-router-dom";
import ButtonGroup from './../ButtonGroup'


export default function Volunteer(props) {
    const initialValues = props.initialState;
    const history = useHistory();
    let pathWithoutPage = history.location.pathname.slice(0,-1);


    return (
        <div>
            Volunteer
            <ButtonGroup 
                pathWithoutPage={pathWithoutPage} 
                pageNo={props.pageNo}
                pagesStr={props.pagesStr}
            />
        </div>
    )
}
