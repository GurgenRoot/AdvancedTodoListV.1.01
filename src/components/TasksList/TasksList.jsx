import React, {useState} from "react";
import './TaskList.scss';
import EditTaskInput from "./EditTaskInput";
import {CompletedTask} from "../CompletedTasks/completedTask";
import {RemoveItemComponent} from "./RemoveItemComponent/RemoveItemComponent";
import {Bounce} from "react-reveal";
import {TaskAddedTime, TaskCompleteTime} from "../CompletedTasks/TaskDayAndTime";
import {EditButton, GoBackButton} from "../Buttons/Buttons";

export const TasksList = (
    { tasks,deleteTaskThunk,getTasksThunk,inpId,inputId,setInputId,
      createTaskThunk,completeTaskThunk,setCompletedTaskDay,setCompletedTaskTime
    }) => {
    const [editBtnVisible, setEditBtnVisible] = useState(true)
    return(
        <div>
            <ul className="list-group">
              {
                 tasks.map((task)=> {
                     return (
                         <li className="list-group-item task-item" key={task.id}>

                               <div className='task-item'>
                                   {
                                       inputId === task.id
                                           ?
                                           <div>
                                             <EditTaskInput  onSubmit = {
                                               (e) => {
                                                   deleteTaskThunk(task.id)
                                                   createTaskThunk(e.editTask,true)
                                                   setEditBtnVisible(!editBtnVisible)
                                                   setInputId(null)
                                               }}
                                             />
                                           </div>
                                           : <Bounce top>
                                               <div className='list-item_btn'>
                                                   <CompletedTask
                                                       task={task}
                                                       completeTaskThunk={completeTaskThunk}
                                                       getTasksThunk = {getTasksThunk}
                                                       setCompletedTaskDay = {setCompletedTaskDay}
                                                       setCompletedTaskTime = {setCompletedTaskTime}
                                                   />
                                                   <TaskAddedTime task={task}/>
                                                   <TaskCompleteTime task={task}/>
                                               </div>
                                            </Bounce>
                                   }
                               </div>

                               <div className='list-item_btn'>
                                   {
                                       editBtnVisible && inputId === task.id
                                       ? <GoBackButton setEditBtnVisible={setEditBtnVisible}
                                                       editBtnVisible={editBtnVisible}
                                                       setInputId={setInputId} />
                                       : <Bounce left>
                                           <EditButton task={task} setEditBtnVisible={setEditBtnVisible} inpId={inpId}/>
                                         </Bounce>
                                   }
                                   <Bounce right><RemoveItemComponent deleteTaskThunk ={deleteTaskThunk} task ={task}/></Bounce>
                               </div>

                         </li>
                     )
                 })
              }
            </ul>
        </div>
    )
};