import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskEntry from './components/TaskEntry';
import Task from './components/Task';

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
  }
  
  //addTask function pushes the JSON object which looks like a task into the array 
  addTask(task) {
    let currentListofTasks = this.state.tasks; 
    currentListofTasks.push(task);
    this.setState({
      tasks: currentListofTasks
    });
  }

//delete Task function uses the splice method to return the removed items from the array
  deleteTask (id) {
    console.log (id);
    let currentListofTasks = this.state.tasks; 
    currentListofTasks.splice(id,1);
    this.setState({
      tasks: currentListofTasks
    });
  }

  /* countingTasksInList (task) {
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

/*

doneTask(){
   this.props.onDoneTaskHandler();
}
*/
  render() {
    return (
      <div className="container">
      <Header />
      <TaskEntry onAddTaskHandler={this.addTask} />
      <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} /> 
      </div>
    );
  }
}

export default App;
// <TaskList tasks={this.state.tasks} passes the list of tasks from the array above on to the TaskList
// the container brings bootstrap into this React App
//<Task taskDescription= {this.state.taskDescription} onDeleteTaskHandler={this.deleteTask} onDoneTaskHandler={this.doneTask} />