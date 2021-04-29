import React from 'react';
import { Formik, Form, Field} from "formik";
import { useHistory } from "react-router-dom";
import ButtonGroup from './../ButtonGroup';
import { summaryValidation } from "./validationSchema";



export default function Summary(props) {
    const history = useHistory();

    const initialValues = props.initialState;
    let pathWithoutPage = history.location.pathname.slice(0,-1);

    return (
        <div className="my-form">
            <h3>GIve us a brief summary about yourself</h3>
            <Formik
                initialValues={{work: initialValues.work}}
                onSubmit={
                    values => {
                        console.log(values);
                        history.push(pathWithoutPage + (props.pageNo + 1))
                    }
                }  
                validationSchema={summaryValidation}
            >
                <Form className="my-form">
                    <div className="form-flex">
                        <label htmlFor="work-details"
                        >
                            Summary
                        </label>
                        <Field name="work[0].details" id="work-details" as="textarea" className="form-textarea" placeholder="Write your summary here" />
                    </div>

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
