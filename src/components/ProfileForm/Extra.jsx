import React, {useState} from 'react';
import { Formik, Form, Field } from "formik";
// import { useHistory } from "react-router-dom";
import { CheckBox } from "./FieldList";
import CVIsReady from './CVIsReady';


export default function Extra(props) {
    // const history = useHistory();
    // let pathWithoutPage = history.location.pathname.slice(0,-1);
    const initialData = JSON.parse(window.localStorage.getItem("resumeData"))

    // Get these stuffs from initial data
    const {
        accomplishments, 
        languages, 
        affiliations, 
        interests, 
        certifications,
        additionalInformation
    } = initialData;
    const [currentComponent, changeComponent] = useState(0);

    const initialValues = {
        boolVal: {
            accomplishments: false,
            languages: false,
            affiliations: false,
            interests: false,
            certifications: false,
            additionalInformation: false
        },
        textVal: {
            accomplishments,
            languages,
            affiliations,
            interests,
            certifications,
            additionalInformation
        },
        labelValues: {
            accomplishments: "Accomplishments",
            languages: "Languages",
            affiliations: "Affiliations",
            interests: "Interests",
            certifications: "Cerifications",
            additionalInformation: "Additional Information"
        },

    }

    const componentChanger = (values) => {
        let valuesMod = Object.entries(values.boolVal).filter(x => x[1])
        if (currentComponent === 0) {
            if (valuesMod.length) changeComponent(1);
            else changeComponent(2);
        }
        if (currentComponent === 1) {
            // Get data from localStorage
           
            
            window.localStorage.setItem("resumeData", JSON.stringify({
                ...initialData, 
                ...values.textVal
            }));
            
            changeComponent(2)
        }
    }

    return (
        <div className="my-form">
            {
                currentComponent < 2 && 
                <>
                    <h3>Add additional sections to your resume</h3>
                    <p style={{color:"var(--green)"}}>These sections are optional.</p>
                </>
                
            }

            {
                currentComponent === 2 &&
                <>
                    <h3>Your Resume is Ready!</h3>
                </>
            }
            
            <Formik
                initialValues={initialValues}
                   
            >
                {({values}) => (
                    <Form>
                    {
                        !currentComponent ?
                        <>
                            <div className="input-group f100">
                                <CheckBox name="boolVal.accomplishments">
                                    Accomplishments
                                </CheckBox>
                            </div>
                            <div className="input-group f100">
                                <CheckBox name="boolVal.languages">
                                    Languages
                                </CheckBox>
                            </div>
                            <div className="input-group f100">
                                <CheckBox name="boolVal.affiliations">
                                    Affiliations
                                </CheckBox>
                            </div>
                            <div className="input-group f100">
                                <CheckBox name="boolVal.interests">
                                    Interests
                                </CheckBox>
                            </div>
                            <div className="input-group f100">
                                <CheckBox name="boolVal.certifications">
                                    Certifications
                                </CheckBox>
                            </div>
                            <div className="input-group f100">
                                <CheckBox name="boolVal.additionalInformation">
                                    Additional Information
                                </CheckBox>
                            </div>
                            <button type="button" className="next-button" onClick={()=>{componentChanger(values)}}>Next</button>
                        </>
                        : currentComponent === 1 ?
                        <>
                            {
                                Object.entries(values.boolVal).filter(x => x[1]).map(
                                    arr => (
                                        <div key={arr[0]} className="my-section">
                                            <h5 style={{color: "var(--green", fontWeight: "300", marginTop: "32px"}}>{values.labelValues[arr[0]]}</h5>
                                            <Field name={"textVal." + arr[0]} id={"textVal." + arr[0]} as="textarea" className="form-textarea" placeholder={"Enter Your " + values.labelValues[arr[0]]} />
                                        </div>
                                    )
                                )
                            }
                            <button type="button" className="next-button" onClick={()=>{componentChanger(values)}}>Next</button>
                        </>
                        : currentComponent === 2 ?
                        <>
                            <CVIsReady />
                        </> : null
                    }
                    
                </Form>
                )}
                
            </Formik>
        </div>
    )
}