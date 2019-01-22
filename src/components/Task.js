import React from 'react';

//class Task extends React.Component {
class Task extends React.Component {
    constructor(props) {
        super(props);
        // default this.state to an empty string when the component first loads
        this.state = {
            taskDescription: ""
        };

        this.dothedeleteTask = this.dothedeleteTask.bind(this);
        this.dothedoneTask = this.dothedoneTask.bind(this);
    }

    dotheaddTask() {
        console.log('addtask invoked')
        this.props.addTaskHandler(this.props.task);
    }

    dothedeleteTask() {
        console.log('deletetask invoked')
        this.props.dothedeleteTask(this.props.task.id);
       //console.log('"'+this.props.taskDescription +', id: ' +this.props.task +'" delete action invoked')
        //alert('Congratulations - Item has been deleted from the Wishlist' + this.props.taskDescription);
        //this.props.deleteTaskHandler(this.props.id);
        
        /*if (this.state.taskDescription > 1){
            let newTask = this.state.taskDescription -1;
            this.setState({taskDescription: newTask});
        }*/
    }
    dothedoneTask(){
        /*
        if (this.state.taskDescription < 5){
            let newTask = this.state.taskDescription + 1;
            this.setState({taskDescription: newTask});
        }*/
    }

 render () {
     return (
         <div className="row" style={styles.taskRow}>
            <div className="col"> 
                {this.props.taskDescription}
            </div>
            <div className="col"> 
            <input type="button" className="btn btn-info" onClick={this.dothedoneTask} value="Done"/>
            </div>
            <div className="col"> 
            <input type="button" className="btn btn-danger" onClick={this.dothedeleteTask} value="Delete"/>
            </div>
            </div>

     ); 
 }
}
const styles = {
    taskRow: {
        paddingTop: "10px",
        paddingBottom: "10px"
    }
}
export default Task; 