import React from 'react';
import { useHistory } from "react-router-dom";
import { Formik, Form} from "formik";
import { TextInput } from "./FieldList";
import ButtonGroup from './../ButtonGroup';
import { personalValidation } from "./validationSchema";

export default function Contact(props) {

    const history = useHistory();

    const initialValues = props.initialState;
    let pathWithoutPage = history.location.pathname.slice(0,-1);
    return (
        <div className="my-form">
            <h3>How may your employer contact you?</h3>
            <Formik
                initialValues={{personal: initialValues.personal}}
                onSubmit={
                    values => {
                        window.localStorage.setItem("resumeData",
                        JSON.stringify({
                            ...initialValues, 
                            personal: values.personal
                        }))
                        console.log({...initialValues, personal: values.personal});
                        history.push(pathWithoutPage + (props.pageNo + 1))
                    }
                }  
                validationSchema={personalValidation}
            >
                {({isSubmitting, errors}) => (
                    <Form className="my-form contact-form" >
                        <div className="form-flex">
                            <div className="input-group f49">
                                <TextInput 
                                    name="personal.firstName"
                                    label = "First Name"
                                    placeholder="First Name"
                                    require = "true"
                                />
                                
                            </div>
                            <div className="input-group f49">
                                <TextInput 
                                    name="personal.lastName"
                                    label="Last Name"
                                    placeholder="Last Name"
                                    require = "true"
                                />
                            </div>
                        </div>

                        <div className="form-flex">
                            <div className="input-group f100">
                                <TextInput 
                                    name="personal.profession"
                                    label="Profession"
                                    placeholder="Your Profession"
                                    require = "true"
                                />
                            </div>
                        </div>

                        <div className="form-flex">
                            <div className="input-group f49 f-sm-100">
                                <TextInput 
                                    name="personal.city"
                                    label="City"
                                    placeholder="Enter Your City"
                                />
                            </div>
                            <div className="input-group f24 f-sm-49">
                                <TextInput 
                                    name="personal.country"
                                    label="Country"
                                    placeholder="Your Country"
                                />
                            </div>
                            <div className="input-group f24 f-sm-49">
                                <TextInput 
                                    name="personal.postcode"
                                    label="Zip Code"
                                    placeholder="Zip Code"
                                />
                            </div>
                        </div>

                        <div className="form-flex">
                            <div className="input-group f49">
                                <TextInput
                                    name="personal.phone"
                                    label="Phone"
                                    placeholder="Phone Number"
                                    
                                />
                            </div>
                            <div className="input-group f49">
                                <TextInput
                                    name="personal.email"
                                    label="Email"
                                    placeholder="Email Address"
                                    type="email"
                                    require = "true"
                                />
                            </div>
                        </div>

                        <h6>+ Add Social Links</h6>

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
