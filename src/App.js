import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskEntry from './components/TaskEntry';
import TasksService from './service/tasks';
class App extends Component {

  // tasks array is default to being empty, when the app first runs
  // also means that everytime the application refreshes there will be an empty list of tasks
  constructor(props) {
    super (props);

    this.state = {
      tasks: []
    };
      
    //Event handler
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }

  async componentDidMount() {
    const tasks = await TasksService.getTasks();
    console.log(tasks);
    this.setState({tasks: tasks});
}
  
  //addTask function pushes the JSON object which looks like a task into the array 
  async addTask(task) {

    const response = await TasksService.saveTask(task);
    task.taskId = response.insertId;
    let currentListofTasks = this.state.tasks; 
    currentListofTasks.push(task);
    this.setState({
      tasks: currentListofTasks
    });
  }

//delete Task function uses the filter method to return the removed items from the array
  async deleteTask (taskId) {
    await TasksService.deleteTask(taskId);
    let currentListOfTasks = this.state.tasks; 
    let updatedListOfTasks = currentListOfTasks.filter((task) => task.taskId !== taskId);
    this.setState({
      tasks: updatedListOfTasks
    });
  }

  async doneTask (taskId) {
    await TasksService.doneTask(taskId);
    let currentListOfTasks = this.state.tasks; 
    let awaitingTaskDone = currentListOfTasks.find((task) => task.taskId === taskId);
    awaitingTaskDone.Completed = true
    this.setState({
      tasks: currentListOfTasks
    });
  }

  render() {
    return (
      <div className="container">
      <Header />
      <TaskEntry onAddTaskHandler={this.addTask} />
      <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} doneTask={this.doneTask}/> 
      </div>
    );
  }
}

export default App;
// <TaskList tasks={this.state.tasks} passes the list of tasks from the array above on to the TaskList
// the container brings bootstrap into this React App
//<Task taskDescription= {this.state.taskDescription} onDeleteTaskHandler={this.deleteTask} onDoneTaskHandler={this.doneTask} />