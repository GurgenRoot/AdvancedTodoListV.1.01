import React from "react";
import './completedTask.scss';
import {CompletedTaskAlert} from "../AlertComponent/AlertComponent";
import {CheckIcon} from "../CheckIcons";

export const CompletedTask = ({task,completeTaskThunk}) => {
    return(
        <div>
            <div className= {task.completedTask ? `task-item_text text` : `task-item_text` }>
                {!task.completedTask
                    ? <CompletedTaskAlert task={task}
                                          completeTaskThunk={completeTaskThunk}
                                          className = {'task-completed_icon'}
                                          color={'#6c757d'}
                      />
                    : <CheckIcon color={'#28a745'}/>
                }
                <div className='list-item_btn'>{task.task} {task.edited ? <span>(edited)</span> : null}</div>
            </div>

        </div>
    )
}

