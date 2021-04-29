import React from 'react';
import { Formik, Form, Field } from "formik";
import ButtonGroup from './../ButtonGroup';
import { useHistory } from "react-router-dom";
import { TextInput } from "./FieldList";
import { educationValidation } from "./validationSchema";



export default function Education(props) {
    const history = useHistory();
    const initialValues = props.initialState;
    let pathWithoutPage = history.location.pathname.slice(0,-1);
    return (
        <div className="my-form">
            <h3>Tell us about your education</h3>
            <Formik
                initialValues={{education: initialValues.education}}
                onSubmit={
                    values => {
                        console.log(values);
                        history.push(pathWithoutPage + (props.pageNo + 1))
                    }
                }  
                validationSchema={educationValidation}
            >
                <Form className="my-form contact-form" >
                    <div className="form-flex">
                        <div className="input-group f49 f-sm-100">
                            <TextInput 
                                name="education[0].institutionName"
                                label = "School Name"
                                placeholder="School Name"
                            />
                        </div>
                        <div className="input-group f49 f-sm-100">
                            <TextInput 
                                name="education[0].city"
                                label = "School Location"
                                placeholder="Location of the school"
                            />
                        </div>
                    </div>

                    <div className="form-flex">
                        <div className="input-group f49 f-sm-100">
                            <TextInput 
                                name="education[0].degree"
                                label = "Degree"
                                placeholder="The degree you got"
                            />
                        </div>
                        <div className="input-group f49 f-sm-100">
                            <TextInput 
                                name="education[0].fieldOfStudy"
                                label = "Field of Study"
                                placeholder="Your Field of Study"
                            />
                        </div>
                    </div>

                    <div className="form-flex">
                        {/* <div className="input-group f49 f-sm-50">
                            <TextInput 
                                name="education[0].degree"
                                label = "Degree"
                                placeholder="The degree you got"
                            />
                        </div> */}
                        <div className="input-group f33">
                            <TextInput 
                                name="education[0].grade"
                                label = "Grade"
                                placeholder="Your Grade"
                            />
                        </div>
                        <div className="input-group f33">
                            <TextInput 
                                name="education[0].startDate"
                                label = "Start Date"
                                placeholder="Select Start Date"
                                type="date"
                            />
                        </div>
                        <div className="input-group f33">
                            <TextInput 
                                name="education[0].graduationDate"
                                label = "Graduation Date"
                                placeholder="Select Graduation Date"
                                type="date"
                            />
                        </div>
                        <div className="input-group f100">
                            <label htmlFor="education-description">Details</label>
                            <Field name="education[0].description" id="education-description" as="textarea" className="form-textarea" placeholder="Other details you want to add" />

                        </div>
                    </div>

                    <h6>+ Add Education History</h6>
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

