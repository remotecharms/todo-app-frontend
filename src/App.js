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
    this.doneTask = this.doneTask.bind(this);
  }
  
  //addTask function pushes the JSON object which looks like a task into the array 
  addTask(task) {
    let currentListofTasks = this.state.tasks; 
    currentListofTasks.push(task);
    this.setState({
      tasks: currentListofTasks
    });
  }

  deleteTask(taskID) {
    this.setState ({
      tasks: this.state.tasks.filter(tasks => tasks.taskID !== taskID)
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

  /*deleteTask(key){
    let filteredTasks= this.state.tasks.filter(function(task){
      return (task.key !== key)
    });
    this.setState({
      tasks: filteredTasks
    })
  }
  
/*  deleteTask(id) {
    let currentList = this.state.tasks; 
    let existingTask = currentList.filter((taskInList) => taskInList.id !==id);
    console.log('existingTask: '+ JSON.stringify(existingTask))
    console.log('taskInList.id: '+taskInList.id)
    this.setState({tasks: existingTask})
    console.log(JSON.stringify(existingTask)); 
  }
*/

/*
deleteTask(id) {
  let currentListofTasks = this.state.tasks; 
  console.log()
  console.log('this.state.tasks: '+JSON.stringify(this.state.tasks))
  // should be using splice instead of filter... how to get ID for the task being deleted?
  let existingList = currentListofTasks.filter((taskInList) => taskInList.id === id) [0];
  console.log('before filter: '+JSON.stringify(currentListofTasks))
  if (existingList.taskDescription === 1) {
    let newList = currentListofTasks.filter((task) => currentListofTasks.id !== id);
    this.setState({tasks: newList});
  }
  else {
    existingList -=1;
    this.setState({tasks: currentListofTasks});
  }
  console.log('after filter: '+JSON.stringify(currentListofTasks))
  this.setState({
    tasks: currentListofTasks
  });
}
*/

 /*
 deleteTask() {
  //console.log('"'+this.props.taskDescription +', id: ' +this.props.task +'" delete action invoked')
   //alert('Congratulations - Item has been deleted from the Wishlist' + this.props.taskDescription);
   //this.props.deleteTaskHandler(this.props.id);
   this.props.onDeleteTaskHandler();
}
*/
doneTask(){
   this.props.onDoneTaskHandler();
}

  render() {
    return (
      <div className="container">
      <Header />
      <TaskEntry onAddTaskHandler={this.addTask} />
      <TaskList tasks={this.state.tasks} deleteTaskHandler={this.deleteTask} /> 
      </div>
    );
  }
}

export default App;
// <TaskList tasks={this.state.tasks} passes the list of tasks from the array above on to the TaskList
// the container brings bootstrap into this React App
//<Task taskDescription= {this.state.taskDescription} onDeleteTaskHandler={this.deleteTask} onDoneTaskHandler={this.doneTask} />