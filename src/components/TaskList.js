import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
 
    render () {

     return (
         <div>
            {
                 this.props.tasks.map((task, i) =>
                <Task taskId={task.taskId} taskDescription={task.description} deleteTask={this.props.deleteTask} doneTask={this.props.doneTask}
                key={i} id={i}/> 
                //showAddButton={false}
                //showDeleteButton={true}
                )                
                //map over array called tasks in app.js, each item in the array is given the
                //name 'task' - which is a variable 
                //then the 'taskDecription' which is each item and 
                //they are given the unique key of 'i'
                //'map' function gives you an index which meant that 'key' = 0,1,2 etc
                //'map' goes to each item in the array, it allocates each item in the array
                //to a variable which is called 'task'
                //in React for every element you render if it's in a loop, it has to be given a key
                //
            }
         </div>
     ); 
 }
}

export default TaskList; 
//taskDescription is like specifying the ISBN number passing it down to the task
// and it choosing to do something with it 

//taskList contains many tasks and each Task has a TaskDescription