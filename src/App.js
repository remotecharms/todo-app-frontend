import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskEntry from './components/TaskEntry';
//import TaskCount from './components/TaskCount';

class App extends Component {

  constructor(props) {
    super (props);

    this.state = {
      tasks: []
    };

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
// the container brings bootstrap into this React App