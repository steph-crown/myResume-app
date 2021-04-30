import React from 'react';
import { useField } from "formik";
import './../../css/checkbox.css'

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input  {...field} {...props} />
            {meta.touched && meta.error ? (
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