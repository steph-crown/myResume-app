import { Form, Formik, Field } from 'formik';
import React from 'react';
import { useHistory } from 'react-router';
import { referenceValidation } from "./validationSchema";
import { TextInput } from "./FieldList";
import ButtonGroup from './../ButtonGroup';




export default function Projects(props) {
    const history = useHistory();
    const initialValues = props.initialState;
    let pathWithoutPage = history.location.pathname.slice(0,-1);
    return (
        <div className="my-form">
            <h3>Do you have references? Tell us about them</h3>
            <Formik
                initialValues={{reference: initialValues.reference}}
                onSubmit={
                    values => {
                        console.log(values);
                        history.push(pathWithoutPage + (props.pageNo + 1))
                    }
                }  
                validationSchema={referenceValidation}
            >
                <Form>
                    <div className="form-flex">
                        <div className="input-group f49 f-sm-100">
                            <TextInput 
                                name="reference[0].name"
                                label = "Name"
                                placeholder="Name of referee"
                            />
                        </div>
                        <div className="input-group f49 f-sm-100">
                            <TextInput 
                                name="reference[0].jobTitle"
                                label="Job Title"
                                placeholder="Job Title of referee"
                            />
                        </div>
                        <div className="input-group f49 f-sm-100">
                            <TextInput 
                                name="reference[0].email"
                                label="Email Address"
                                placeholder="Email address of referee"
                            />
                        </div>
                        <div className="input-group f49 f-sm-100">
                            <TextInput 
                                name="reference[0].phone"
                                label="Phone Number"
                                placeholder="Phone Number of referee"
                            />
                        </div>
                        <div className="input-group f100">
                            <TextInput 
                                name="reference[0].company"
                                label="Company"
                                placeholder="Company where referee works"
                            />
                        </div>
                    </div> 
                    <div className="form-flex">
                            <label htmlFor="project-description"
                            >
                                Project Description
                            </label>
                            <Field name="projects[0].description" id="project-description" as="textarea" className="form-textarea" placeholder="Give a brief description of the project" />
                            
                        </div>
                    <h6>+ Add Project Details</h6>
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
