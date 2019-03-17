import React from 'react';

//class Task extends React.Component {
class Task extends React.Component {
    constructor(props) {
        super(props);
        // default this.state to an empty string when the component first loads
        this.state = {
            taskDescription: ""
        };

        this.deleteTaskClicked = this.deleteTaskClicked.bind(this);
        this.doneTaskCLicked = this.doneTaskClicked.bind(this);
    }

    deleteTaskClicked() {
        this.props.deleteTaskHandler(this.props.taskId);
    }

    doneTaskClicked() {
        this.props.doneTaskHandler(this.props.taskId);
    }
   

 render () {
     return (
         <div className="row" style={styles.taskRow}>
            <div className="col"> 
               {this.props.taskDescription}
            </div>
            <div className="col"> 
            <input type="button" className="btn btn-info" onClick={this.doneTaskClicked} value="Done"/>
            </div>
            <div className="col"> 
            <input type="button" className="btn btn-danger" onClick={this.deleteTaskClicked} value="Delete"/>
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