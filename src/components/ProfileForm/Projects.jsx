import { Form, Formik, Field } from 'formik';
import React from 'react';
import { useHistory } from 'react-router';
import { projectsValidation } from "./validationSchema";
import { TextInput } from "./FieldList";
import ButtonGroup from './../ButtonGroup';




export default function Projects(props) {
    const history = useHistory();
    const initialValues = props.initialState;
    let pathWithoutPage = history.location.pathname.slice(0,-1);
    return (
        <div className="my-form">
            <h3>Tell us about projects you have worked on</h3>
            <Formik
                initialValues={{projects: initialValues.projects}}
                onSubmit={
                    values => {
                        window.localStorage.setItem("resumeData",
                        JSON.stringify({
                            ...initialValues, 
                            projects: values.projects
                        }))
                        history.push(pathWithoutPage + (props.pageNo + 1))
                    }
                }  
                validationSchema={projectsValidation}
            >
                <Form>
                    <div className="form-flex">
                        <div className="input-group f49 f-sm-100">
                            <TextInput 
                                name="projects[0].title"
                                label = "Title"
                                placeholder="Title of Project"
                            />
                        </div>
                        <div className="input-group f49 f-sm-100">
                            <TextInput 
                                name="projects[0].projectLinks"
                                label="Link"
                                placeholder="Link to project"
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
