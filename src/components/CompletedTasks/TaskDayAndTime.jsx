import React from "react";
import './completedTask.scss';

export const TaskAddedTime = ({task}) => {
    return(
        <div className='task-item_data'>
            <span className="badge badge-primary">added-{task.day}</span>
            <small>{task.time}</small>
        </div>
    )
};

export const TaskCompleteTime = ({task}) => {
    return (
        <div>
            {task.completedTask ? Object.values(task.completedTask).map(completedTask => {
                const key = Object.keys(task.completedTask)
                return (
                    <div className='task-completed_time' key={key[0]}>
                        <span className='badge badge-success'>Completed Time -{completedTask.completedTaskDay}</span>
                        <small>{completedTask.completedTaskTime}</small>
                    </div>
                )
            }) : null}
        </div>
    )
}