import React, {useState} from "react";
import {TasksList} from "./TasksList";
import {connect} from "react-redux";
import {deleteTaskThunk, getTasksThunk,createTaskThunk,completeTaskThunk} from "../../store/createTaskReducer";
import {SearchInput} from "../SearchInput/SearchInput";

const mapStateToProps = (store) => {
    return{
        tasks: store.createTaskReducer.tasks //.filter(task => task.task === 'Task')
    }
}

const TaskListContainer = ({tasks,deleteTaskThunk,getTasksThunk,createTaskThunk,completeTaskThunk}) => {
    const [targetValue, setTargetValue] = useState('')

    const task = Object.values(tasks).filter(task => task.task.includes(targetValue))

    const [inputId , setInputId ] = useState(null)

    const inpId = (id) => {
        const task = tasks.filter(task => task.id === id)
        setInputId(task[0].id)
    }

    return (
        <div>
            {
                task.length === 0
                    ? <div className='no-task'>NO TASK</div>
                    : <div>
                        <SearchInput setTargetValue ={setTargetValue}/>
                        <TasksList getTasksThunk={getTasksThunk}
                                   createTaskThunk={createTaskThunk}
                                   deleteTaskThunk={deleteTaskThunk}
                                   completeTaskThunk={completeTaskThunk}
                                   tasks={task}
                                   inpId={inpId}
                                   inputId={inputId}
                                   setInputId={setInputId}
                                   setCompletedTaskDay={task}
                                   setCompletedTaskTime={task}
                        />
                      </div>
            }
        </div>
    )
};

export default connect(mapStateToProps,{deleteTaskThunk,getTasksThunk,createTaskThunk,completeTaskThunk})(TaskListContainer)