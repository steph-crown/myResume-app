import React from 'react';
import { Formik, Field, Form } from "formik";


export default function Work(props) {
    const initialValues = props.initialState
    return (
        <div className="my-form">
            <h3>Tell us about your most recent job</h3>
            <PartWork initialValues={initialValues} />

            <h6>+ Add Work</h6>
        </div>
    )
}



const PartWork = (props) => {
    return (
        <Formik
            initialValues={props.initialValues}
            onSubmit={values => {console.log(values)}}
            
        >
            <Form className="my-form contact-form" >
                <div className="form-flex">
                    <div className="input-group f49 f-sm-100">
                        <label htmlFor="title">Job Title</label>
                        <Field id="title" name="work[0].title" 
                        placeholder="Enter Job Title"
                        type="text" />
                    </div>
                    <div className="input-group f49 f-sm-100">
                        <label htmlFor="employer">Employer</label>
                        <Field id="employer" name="work[0].employer" 
                        placeholder="Your Employer"
                        type="text" />
                    </div>
                </div>

                <div className="form-flex">
                    <div className="input-group f49">
                        <label htmlFor="workcity">City</label>
                        <Field id="workcity" name="work[0].city" 
                        placeholder="City of the employer" type="text" />
                    </div>
                    <div className="input-group f49 ">
                        <label htmlFor="workcountry">City</label>
                        <Field id="workcountry" name="work[0].country" 
                        placeholder="Country of employer" type="text" />

                    </div>
                </div>

                <div className="form-flex">
                    
                    <div className="input-group f49">
                        <label htmlFor="startdate">Start Date</label>
                        <Field id="startdate" name="work[0].start" 
                        placeholder="When you started"
                        type="date" />
                    </div>
                    <div className="input-group f49">
                        <label htmlFor="enddate">End Date</label>
                        <Field id="enddate" name="work[0].end" type="date" placeholder="When it ended" />
                    </div>
                </div>
                
            </Form>
        </Formik>
    )
}