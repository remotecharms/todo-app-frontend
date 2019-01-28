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
        /*this.dothedoneTask = this.dothedoneTask.bind(this);
        this.onDoneClicked = this.onDoneClicked.bind(this);
        */
    }

    deleteTask(id) {
        this.props.deleteTask(this.props.id);
    }
   
    /*dothedoneTask(){
        
        if (this.state.taskDescription < 5){
            let newTask = this.state.taskDescription + 1;
            this.setState({taskDescription: newTask});
        }*/

        // This function executes when the done button is clicked.
        /*onDoneClicked(taskID) {
            console.log('ondoneclicked invoked')
            this.props.onDoneTaskHandler(taskID)
        };
*/

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