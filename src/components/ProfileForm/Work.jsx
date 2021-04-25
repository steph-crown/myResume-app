import React from 'react';
import { Formik, Form, Field } from "formik";
import ButtonGroup from './../ButtonGroup';
import { useHistory } from "react-router-dom";
import { workValidation } from "./validationSchema";
import { TextInput, CheckBox } from "./FieldList";



export default function Work(props) {
    const history = useHistory();

    const initialValues = props.initialState;
    let pathWithoutPage = history.location.pathname.slice(0,-1);
    return (
        <div className="my-form">
            <h3>Tell us about your most recent job</h3>
            <Formik
                initialValues={{work: initialValues.work}}
                onSubmit={
                    values => {
                        console.log(values);
                        history.push(pathWithoutPage + (props.pageNo + 1))
                    }
                }  
                validationSchema={workValidation}
            >
                {({isSubmitting, errors}) => (
                    <Form className="my-form contact-form" >
                    
                        <div className="form-flex">
                            <div className="input-group f49 f-sm-100">
                                <TextInput
                                    name="work[0].title"
                                    label="Job Title"
                                    placeholder="Enter Job Title"
                                />
                            </div>
                            <div className="input-group f49 f-sm-100">
                                <TextInput
                                    name="work[0].employer"
                                    label="Employer"
                                    placeholder="Your Employer"
                                />
                            </div>
                        </div>

                        <div className="form-flex">
                            <div className="input-group f49">
                                <TextInput
                                    name="work[0].city"
                                    label="City"
                                    placeholder="City of the employer"
                                />
                            </div>
                            <div className="input-group f49 ">
                                <TextInput
                                    name="work[0].country"
                                    label="Country"
                                    placeholder="Country of the employer"
                                />
                            </div>
                        </div>

                        <div className="form-flex">
                            
                            <div className="input-group f49">
                                <TextInput
                                    name="work[0].start"
                                    label="Start Date"
                                    placeholder="When You Started"
                                />
                            </div>
                            <div className="input-group f49">
                                <TextInput
                                    name="work[0].end"
                                    label="End Date"
                                    placeholder="When it ended"
                                    type="date"
                                />
                            </div>
                        </div>

                        <div className="form-flex">
                            <label htmlFor="work-details"
                            >
                                What You Did Here
                            </label>
                            <Field name="work[0].details" id="work-details" as="textarea" className="form-textarea" placeholder="What I did" />
                            </div>
                        <CheckBox name="work[0].isCurrentlyWorking">
                            I am still working there
                        </CheckBox>
                            
                        
                        <h6 onClick={()=>{console.log(errors);}}>+ Add Work History</h6>
                        <ButtonGroup 
                            pathWithoutPage={pathWithoutPage} 
                            pageNo={props.pageNo}
                            pagesStr={props.pagesStr}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
}



