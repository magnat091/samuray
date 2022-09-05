import React from "react";
import s from './formsControls.module.css';

export const Textarea = ({ forms , field,  ...props}) => {
    return(
        <div>
            <textarea className={s.formControl} {...props} {...field}></textarea>
        </div>
    )
}
export const ErrorMessageField = ({ forms ,   ...props}) => {
    return(
      <div>
            <span className={s.errorMessage} {...props} {...forms}></span>
        </div>

    )
}
