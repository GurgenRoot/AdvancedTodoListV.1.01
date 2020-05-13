import React from "react";
import './input.scss';

export const Input = ({input,meta}) => {
    const hasError = meta.touched && meta.error;

    return(
        <div className={hasError ? 'input' : null}>
            <div className="input-group mb-3">
                <input type="text"
                       {...input}
                       className="form-control"
                       placeholder="Create Task"
                       aria-label="Recipient's username"
                       aria-describedby="button-addon2"
                />

                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" id="button-addon2">Add</button>
                </div>
            </div>
            {hasError ? <div className='input-error'>{meta.error}</div> : null}
        </div>
    )
};