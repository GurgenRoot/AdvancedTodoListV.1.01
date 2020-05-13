import React from "react";
import {connect} from "react-redux";
import {createTaskThunk, taskCountThunk} from "../../store/createTaskReducer";
import TaskCreateInputForm from "./TaskCreateInput";

const TaskCreateInputContainer = ({createTaskThunk,taskCountThunk}) => {
    return (
        <div>
            <TaskCreateInputForm onSubmit = {(e) => {
                createTaskThunk(e.task);
                taskCountThunk(e.task)
            }}
            />
        </div>
    )
};

export default connect(null,{createTaskThunk,taskCountThunk})(TaskCreateInputContainer);


