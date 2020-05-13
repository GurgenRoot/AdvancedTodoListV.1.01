import React from "react";
import {Field, reduxForm} from "redux-form";
import {MaxValueValidate, Required} from "../../validateComponent/validateComponent";
import {Input} from "../TaskCreateInput/Input/Input";

const MaxLength = MaxValueValidate(40)

const EditTaskInput = (props) => {
    return(
        <div>
         {
          <div>
            <form onSubmit={props.handleSubmit}>
              <Field
                  name='editTask'
                  validate={[Required,MaxLength]}
                  component={Input}
                  onSubmit={props.handleSubmit}
                  {...props}
              />
            </form>
          </div>
         }
        </div>
    )
}

export default reduxForm({form: 'edit-tasks'})(EditTaskInput)