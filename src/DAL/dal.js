import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-list-db-5fe9b.firebaseio.com/',
})

export const aboutTask = {
    TasksCount(task) {
        const day = new Date().toLocaleDateString()
        const time = new Date().toLocaleTimeString()
        return instance.post('notes/count.json',{task,day,time}).then(response => response)
    },

    postTask(task,edited) {
        const day = new Date().toLocaleDateString()
        const time = new Date().toLocaleTimeString()
        // return required
        return instance.post('notes/tasks.json',{task,day,time,edited}).then(response => response)
    },
    getTask() {
        // return required
        return instance.get('notes/tasks.json').then(response => response)
    },

    deleteTask(id) {
        // return required
        return instance.delete(`notes/tasks/${id}.json`).then(response => response)
    },

    doneTasks(id,completed) {
        const completedTaskDay = new Date().toLocaleDateString()
        const completedTaskTime = new Date().toLocaleTimeString()
        return instance.post(`notes/tasks/${id}/completedTask.json`,{completedTaskDay,completedTaskTime,completed}).then(response => response)
    }
}

