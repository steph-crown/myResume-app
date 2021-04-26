import React from 'react';
import { Formik, Form, Field } from "formik";
import ButtonGroup from './../ButtonGroup';
import { useHistory } from "react-router-dom";
import { volunteerValidation } from "./validationSchema";
import { TextInput, CheckBox } from "./FieldList";



export default function Volunteer(props) {
    const history = useHistory();

    const initialValues = props.initialState;
    let pathWithoutPage = history.location.pathname.slice(0,-1);
    return (
        <div className="my-form">
            <h3>Tell us about your most recent volunteer experiences</h3>
            <Formik
                initialValues={{volunteer: initialValues.volunteer}}
                onSubmit={
                    values => {
                        console.log(values);
                        history.push(pathWithoutPage + (props.pageNo + 1))
                    }
                }  
                validationSchema={volunteerValidation}
            >
                {({isSubmitting, errors}) => (
                    <Form className="my-form contact-form" >
                    
                        <div className="form-flex">
                            <div className="input-group f49 f-sm-100">
                                <TextInput
                                    name="volunteer[0].title"
                                    label="Job Title"
                                    placeholder="Enter Job Title"
                                />
                            </div>
                            <div className="input-group f49 f-sm-100">
                                <TextInput
                                    name="volunteer[0].employer"
                                    label="Employer"
                                    placeholder="Your Employer"
                                />
                            </div>
                        </div>

                        <div className="form-flex">
                            <div className="input-group f49">
                                <TextInput
                                    name="volunteer[0].city"
                                    label="City"
                                    placeholder="City of the employer"
                                />
                            </div>
                            <div className="input-group f49 ">
                                <TextInput
                                    name="volunteer[0].country"
                                    label="Country"
                                    placeholder="Country of the employer"
                                />
                            </div>
                        </div>

                        <div className="form-flex">
                            
                            <div className="input-group f49">
                                <TextInput
                                    name="volunteer[0].start"
                                    label="Start Date"
                                    placeholder="When You Started"
                                />
                            </div>
                            <div className="input-group f49">
                                <TextInput
                                    name="volunteer[0].end"
                                    label="End Date"
                                    placeholder="When it ended"
                                    type="date"
                                />
                            </div>
                        </div>

                        <div className="form-flex">
                            <label htmlFor="volunteer-details"
                            >
                                What You Did Here
                            </label>
                            <Field name="volunteer[0].details" id="volunteer-details" as="textarea" className="form-textarea" placeholder="What I did" />
                            </div>
                        <CheckBox name="volunteer[0].isCurrentlyWorking">
                            I am still volunteering there
                        </CheckBox>
                            
                        
                        <h6 onClick={()=>{console.log(errors);}}>+ Add Volunteer History</h6>
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



