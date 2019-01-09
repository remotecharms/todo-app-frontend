import React from 'react';

import Task from './Task';

class TaskList extends React.Component {
 
    render () {

        let listOfTasks = [
            "Take the dog for a walk",
            "Buy some milk", 
            "Feed the cat", 
            "Go to bed", 
            "Eat snacks"
        ];

     return (
         <div>
         {listOfTasks.map((task,i) => 
            <Task taskDescription={task} key={i}/>)}
         </div>
     ); 
 }
}

//const styles = {
    //header : {
        //color: "blue"
    //}
//};
export default TaskList; 