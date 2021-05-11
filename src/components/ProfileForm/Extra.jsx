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

    const componentChanger = (values) => {
        values = Object.entries(values).filter(x => x[1])
        console.log(values);
        values.length ?
        changeComponent(1)
        : changeComponent(2)
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
                {({values}) => (
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
                            <button type="button" className="next-button" onClick={()=>{componentChanger(values)}}>Next</button>
                        </>
                        : currentComponent === 1 ?
                        <>
                            {
                                Object.entries(values).filter(x => x[1]).map(
                                    arr => (
                                        <div className="my-section">
                                            <h2>{arr[0]}</h2>
                                            
                                        </div>
                                    )
                                )
                            }
                        </>
                        : currentComponent === 2 ?
                        <>
                            2
                            <ButtonGroup 
                                pathWithoutPage={pathWithoutPage} 
                                pageNo={props.pageNo}
                                pagesStr={props.pagesStr}
                            />
                        </> : null
                    }
                    
                </Form>
                )}
                
            </Formik>
        </div>
    )
}