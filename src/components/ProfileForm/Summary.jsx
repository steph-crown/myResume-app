import React from 'react';
import { Formik, Form, Field} from "formik";
import { useHistory } from "react-router-dom";
import ButtonGroup from './../ButtonGroup';



export default function Summary(props) {
    const history = useHistory();

    const initialValues = props.initialState;
    let pathWithoutPage = history.location.pathname.slice(0,-1);

    return (
        <div className="my-form">
            <h3>GIve us a brief summary about yourself</h3>
            <Formik
                initialValues={{professionalSummary: initialValues.professionalSummary}}
                onSubmit={
                    values => {
                        console.log(values);
                        history.push(pathWithoutPage + (props.pageNo + 1))
                    }
                }  
            >
                <Form className="my-form">
                    <div className="form-flex">
                        <label htmlFor="professionalSummary"
                        >
                            Summary
                        </label>
                        <Field name="professionalSummary" id="professionalSummary" as="textarea" className="form-textarea" placeholder="Write your summary here" />
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
