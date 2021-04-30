import React from 'react';
import { useField } from "formik";
import './../../css/checkbox.css';
import './../../css/error-alert.css';

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    const anError = meta.touched && meta.error;
    const noError = meta.touched && !meta.error;
    return (
        <>
            <label className={anError ? "an-error" : noError & props.required ? "no-error" : ""} htmlFor={props.id || props.name}>{label}</label>
            <input className={anError ? "an-error" : noError & props.required ? "no-error" : ""} {...field} {...props} />
            {anError ? (
            <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
}




const CheckBox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div class="my-checkbox">
            
            <label className="checkbox-container">
                {children}
                <input type="checkbox" {...field} {...props}  />
                <span className="checkmark"></span>
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
            </div>
    );
}




const Select = () => {
    return (
        <div>
            Select
        </div>
    )
}

export {TextInput, CheckBox, Select}