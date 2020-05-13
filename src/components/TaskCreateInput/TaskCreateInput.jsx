import React from "react";
import {reset, reduxForm,Field} from "redux-form";
import {Input} from "./Input/Input";
import {Required,MaxValueValidate} from "../../validateComponent/validateComponent";
const MaxLength = MaxValueValidate(50);

const TaskCreateInput = (props) => {

    return(
        <div className='pt-sm-3'>
            <form onSubmit={props.handleSubmit}>
                <Field
                    name='task'
                    validate={[Required,MaxLength]}
                    component={Input}
                    {...props}
                />
            </form>
        </div>
    )
};

const afterSubmit = (result, dispatch) => dispatch(reset('task-input'));

const  TaskCreateInputForm= reduxForm({
    form: 'task-input',
    onSubmitSuccess: afterSubmit,
})(TaskCreateInput);

export default TaskCreateInputForm;