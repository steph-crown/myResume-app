import React from 'react';
import { Formik, Form, Field } from "formik";
import ButtonGroup from './../ButtonGroup';
// import { useHistory } from "react-router-dom";
import { TextInput } from "./FieldList";


export default function Extra(props) {
    const initialValues = props.initialState;
    return (
        <div className="my-form">
            <h3>Add additional sections to your resume</h3>
            <Formik
                initialValues={initialValues}
            >

            </Formik>
        </div>
    )
}
