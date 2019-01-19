import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskEntry from './components/TaskEntry';
//import TaskCount from './components/TaskCount';

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
  }
  
  //addTask function pushes the task into the array 
  addTask(task) {
    let currentListofTasks = this.state.tasks; 
    currentListofTasks.push(task);
    this.setState({
      tasks: currentListofTasks
    });
  }

  countingTasksInList (task) {
    let currentList = this.state.tasks;
    let taskAddedToList = currentList.filter((taskInList) => taskInList.i === task.i).length > 0;
    if(taskAddedToList) {
      let existingList = this.state.tasks;
      for(let taskInList of existingList) {
        if(taskInList.id === task.i ) {
          taskInList.items += 1;
        }
      }

      this.setState({tasks: existingList});
    }
    else {
      let taskToBeAdded = {
        task:1
      };
      currentList.push(taskToBeAdded);
    }

    this.setState({tasks: currentList});
  }
  
    
  render() {
    return (
      <div className="container">
      <Header />
      <TaskEntry onSaveTaskHandler={this.addTask} />
      <TaskList tasks={this.state.tasks} /> 
      </div>
    );
  }
}

export default App;
// <TaskList tasks={this.state.tasks} passes the list of tasks from the array above on to the TaskList
// the container brings bootstrap into this React App