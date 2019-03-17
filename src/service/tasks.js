import axios from 'axios';

const TasksService = {
    async getTasks() {
        let res = await axios.get("https://ej7jzhx1ja.execute-api.eu-west-2.amazonaws.com/dev/tasks");
        let data = await res.data;
        return data;
    },

    async saveTask(task){
        let res = await axios.post("https://ej7jzhx1ja.execute-api.eu-west-2.amazonaws.com/dev/tasks", task);
        return res.data;
    },

    async deleteTask(taskId){
        let res = await axios.delete("https://ej7jzhx1ja.execute-api.eu-west-2.amazonaws.com/dev/tasks/{taskId}" + taskId);
        return res.data;
    }
};
//this is a service class - the above is a service 
// res is results
// you can only use 'await' in asynchronous code or async code
//the first argument is the url that you're posting to
//the second argument is the JSON object

export default TasksService;