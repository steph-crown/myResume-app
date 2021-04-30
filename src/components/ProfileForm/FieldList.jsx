import React from 'react';
import { useField } from "formik";
import './../../css/checkbox.css';
import './../../css/error-alert.css';

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    const anError = meta.touched && meta.error;
    const noError = meta.touched && !meta.error;
    const classname = anError ? "an-error" : 
        noError && props.require ? "no-error" : 
        !props.require && meta.value ? "no-error" : ""
    return (
        <>
            <label className={classname} htmlFor={props.id || props.name}>{label} <span className="avrya-starr">{(props.require ? " *" : "")}</span></label>
            <div className="input-flexbox" id={classname}>
                <input className={classname} {...field} {...props} />
                <div className={"text-check " + classname}>
                </div>
            </div>
            
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