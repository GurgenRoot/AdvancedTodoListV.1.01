import {aboutTask} from "../DAL/dal";
import {TaskCreatedAlert} from "../components/AlertComponent/AlertComponent";

const CREATE_TASK = 'create-task/reducer/CREATE_TASK';

const initialState = {
    tasks: []
}

export const createTaskReducer = (state=initialState,action) => {
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                tasks: action.task
            }
        default:
            return state
    }
}

export const createTaskAC = (task) => ({type: CREATE_TASK, task })

export const createTaskThunk = (task, edited= null) => {
    return async (dispatch) => {
        const response = await aboutTask.postTask(task,edited)
        if (response.status === 200 ) {
            await TaskCreatedAlert()
            dispatch(getTasksThunk())
        }
    }
}

export const getTasksThunk =  () => {
    return async (dispatch) => {
        const response = await aboutTask.getTask()
        if (response.data) {
            const key = Object.keys(response.data).map(key => {
                return {
                    ...response.data[key],
                    id : key,
                }
            })
            if (response.status === 200) {
                dispatch(createTaskAC(key))
            }
        }
        if (!response.data) {
            const key = []
            dispatch(createTaskAC(key))
        }
    }
}

export const deleteTaskThunk = (id) => {
    return async (dispatch) => {
        const response = await aboutTask.deleteTask(id)
        if (response.status === 200) {
            dispatch(getTasksThunk())
        }
    }
}

export const completeTaskThunk = (id, completedTaskDay, completedTaskTime, completed=true) => {
    return async (dispatch) => {
        const response = await aboutTask.doneTasks(id,completedTaskDay,completedTaskTime,completed)
        if (response.status === 200) {
            dispatch(getTasksThunk())
        }
    }
}

export const taskCountThunk = (task) => {
    return async ()=> {
        await aboutTask.TasksCount(task)
    }
}
