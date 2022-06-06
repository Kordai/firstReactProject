import React from 'react';
import s from './FormsControls.module.css';

export const NewInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
return (
    <div className={hasError? s.error:null}>
        <div>
            <input {...input} {...props} />
        </div>
        {hasError && <span className={s.spanerror}>{meta.error}</span>}
    </div>
)
}