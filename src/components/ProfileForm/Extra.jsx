import React from 'react';
import { Formik, Form, Field } from "formik";
import ButtonGroup from './../ButtonGroup';
import { useHistory } from "react-router-dom";
import { TextInput } from "./FieldList";


export default function Extra(props) {
    const history = useHistory();
    const initialValues = props.initialState;
    let pathWithoutPage = history.location.pathname.slice(0,-1);

    return (
        <div className="my-form">
            <h3>Add additional sections to your resume</h3>
            <Formik
                initialValues={initialValues}
            >
                <Form>
                    <ButtonGroup 
                        pathWithoutPage={pathWithoutPage} 
                        pageNo={props.pageNo}
                        pagesStr={props.pagesStr}
                    />
                </Form>
            </Formik>
        </div>
    )
}
