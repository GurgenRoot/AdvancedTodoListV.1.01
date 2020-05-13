import React from "react";
import {DeleteAlertComponent} from "../../AlertComponent/AlertComponent";

export const RemoveItemComponent = ({deleteTaskThunk,task}) => {
    return(
        <div>
           <DeleteAlertComponent deleteTaskThunk={deleteTaskThunk} task={task}/>
        </div>
    )
}