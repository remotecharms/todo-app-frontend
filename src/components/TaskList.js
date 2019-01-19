import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
 
    render () {

     return (
         <div>
            {
                this.props.tasks.map((task, i) =>
                    <Task taskDescription={task.description} key={i} />
                )
            }
         </div>
     ); 
 }
}

export default TaskList; 
//taskDescription is like specifying the ISBN number passing it down to the task
// and it choosing to do something with it 

//taskList contains many tasks and each Task has a TaskDescription