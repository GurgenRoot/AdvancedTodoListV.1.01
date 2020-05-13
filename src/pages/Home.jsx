import React, {useEffect} from "react";
import TaskCreateInputContainer from "../components/TaskCreateInput/TaskCreateInputContainer";
import TasksListContainer from "../components/TasksList/TasksListContainer";
import {getTasksThunk} from "../store/createTaskReducer";
import {connect} from "react-redux";

const Home = ({getTasksThunk}) => {
    useEffect(() => {
        getTasksThunk();
    },[])

    return(
        <div>
            <TaskCreateInputContainer/>
            <TasksListContainer/>
        </div>
    )
}
export default connect(null,{getTasksThunk})(Home)
