import React from 'react';
import StarRating from './../../assets/StarRating';
import { Formik, Form} from "formik";
import { useHistory } from "react-router-dom";
import { TextInput, CheckBox } from "./FieldList";
import { skillsValidation } from "./validationSchema";
import ButtonGroup from './../ButtonGroup';


export default function Skills(props) {
    const history = useHistory();

    const initialValues = props.initialState;
    let pathWithoutPage = history.location.pathname.slice(0,-1);

    return (
        <div className="my-form">
            <h3>What skills do you want to highlight?</h3>
            <Formik
                initialValues={{skills: initialValues.skills}}
                onSubmit={
                    values => {
                        history.push(pathWithoutPage + (props.pageNo + 1))
                    }
                }  
                validationSchema={skillsValidation}
            >
                {({isSubmitting, errors, values}) => (
                     <Form>
                        <div className="form-flex">
                            <div className="input-group f49 f-sm-100">
                                <TextInput
                                    name="skills.list[0].name"
                                />
                            </div>
                            <div className="input-group f49 f-sm-100 stars">
                                <StarRating changeRating={(ratingNumber)=> {
                                    values.skills.list[0].expertLevel = ratingNumber;
                                    console.log(values);
                                }} />
                               <div className="skill-circle">
                                    <div className="skill-dash">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="input-group f100">
                                <CheckBox name="skills.hideExpertLevel">
                                    Don't Include Skills Level
                                </CheckBox>
                            </div>
                        </div>
                        <h6>+ Add Skills</h6>

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