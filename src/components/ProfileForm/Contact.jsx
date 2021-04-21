import React from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";

export default function Contact(props) {
    const initialValues = props.initialState
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {console.log(values)}}
            >
                <Form className="my-form contact-form">
                    <div className="form-flex">
                        <div className="input-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field id="firstName" name="personal.firstName" className="f45" type="text" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Field id="lastName" name="personal.lastName" className="f45" type="text" />
                        </div>
                    </div>

                    <div className="form-flex">
                        <div className="input-group">
                            <label htmlFor="profession">Profession</label>
                            <Field id="profession" name="personal.profession" className="f100" type="text" />
                        </div>
                    </div>

                    <div className="form-flex">
                        <div className="input-group">
                            <label htmlFor="city">City</label>
                            <Field id="city" name="personal.city" className="f50" type="text" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="country">Country</label>
                            <Field id="country" name="personal.country" className="f25" type="text" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="postCode">Zip Code</label>
                            <Field id="postCode" name="personal.postcode" className="f25" type="number" />
                        </div>
                    </div>

                    <div className="form-flex">
                        <div className="input-group">
                            <label htmlFor="phone">Phone</label>
                            <Field id="phone" name="personal.phone" className="f45" type="number" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="personal.email" className="f45" type="email" />
                        </div>
                    </div>

                    <h6>+ Add Social Links</h6>
                    <button type="submit"></button>

                </Form>
                
            </Formik>
            
        </div>
    )
}
