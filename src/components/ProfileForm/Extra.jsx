import React, {useState} from 'react';
import { Formik, Form } from "formik";
import ButtonGroup from './../ButtonGroup';
import { useHistory } from "react-router-dom";
import { CheckBox } from "./FieldList";


export default function Extra(props) {
    const history = useHistory();
    let pathWithoutPage = history.location.pathname.slice(0,-1);
    
    const [currentComponent, changeComponent] = useState(0);

    const initialValues = {
        accomplishments: false,
        languages: false,
        affiliations: false,
        interests: false,
        certifications: false,
        additionalInfo: false
    }

    return (
        <div className="my-form">
            <h3>Add additional sections to your resume</h3>
            <p style={{color:"var(--green)"}}>These sections are optional.</p>
            <Formik
                initialValues={initialValues}
                onSubmit={
                    values => {
                        console.log(values);
                    }
                }
            >
                
                <Form>
                    {
                        !currentComponent ?
                        <>
                            <div className="input-group f100">
                                <CheckBox name="accomplishments">
                                    Accomplishments
                                </CheckBox>
                            </div>
                            <div className="input-group f100">
                                <CheckBox name="languages">
                                    Languages
                                </CheckBox>
                            </div>
                            <div className="input-group f100">
                                <CheckBox name="affiliations">
                                    Affiliations
                                </CheckBox>
                            </div>
                            <div className="input-group f100">
                                <CheckBox name="interests">
                                    Interests
                                </CheckBox>
                            </div>
                            <div className="input-group f100">
                                <CheckBox name="certifications">
                                    Certifications
                                </CheckBox>
                            </div>
                            <div className="input-group f100">
                                <CheckBox name="additionalInfo">
                                    Additional Information
                                </CheckBox>
                            </div>
                            <button type="button" className="next-button">Next</button>
                        </>
                        :
                        <>
                            <ButtonGroup 
                                pathWithoutPage={pathWithoutPage} 
                                pageNo={props.pageNo}
                                pagesStr={props.pagesStr}
                            />
                        </>
                    }
                    
                </Form>
            </Formik>
        </div>
    )
}