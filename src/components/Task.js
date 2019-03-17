import React from 'react';

//class Task extends React.Component {
class Task extends React.Component {
    constructor(props) {
        super(props);
        // default this.state to an empty string when the component first loads
        this.state = {
            taskDescription: ""
        };

        this.deleteTask = this.deleteTask.bind(this);
        this.doneTask = this.doneTask.bind(this);
    }

    deleteTask() {
        this.props.deleteTask(this.props.taskId);
    }

    doneTask() {
        this.props.doneTask(this.props.taskId);
    }
   

 render () {
     return (
         <div className="row" style={styles.taskRow}>
            <div className="col"> 
               {this.props.taskDescription}
            </div>
            <div className="col"> 
            <input type="button" className="btn btn-info" onClick={this.doneTask} value="Done"/>
            </div>
            <div className="col"> 
            <input type="button" className="btn btn-danger" onClick={this.deleteTask} value="Delete"/>
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