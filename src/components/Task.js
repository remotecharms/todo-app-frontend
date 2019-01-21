import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        // default this.state to an empty string when the componenet first loads
        this.state = {
            taskDescription: ""
        };

        this.deleteTask = this.deleteTask.bind(this);
    }

    addTask() {
        this.props.addTaskHandler(this.props.task);
    }

    deleteTask() {
       //console.log('"'+this.props.taskDescription +', id: ' +this.props.task +'" delete action invoked')
        //alert('Congratulations - Item has been deleted from the Wishlist' + this.props.taskDescription);
        //this.props.deleteTaskHandler(this.props.id);
        this.props.deleteTaskHandler(this);
    }

 render () {
     return (
         <div className="row" style={styles.taskRow}>
            <div className="col"> 
                {this.props.taskDescription}
            </div>
            <div className="col"> 
            <input type="button" className="btn btn-info" value="Done"/>
            </div>
            <div className="col"> 
            <input type="button" className="btn btn-danger" value="Delete" onClick={this.deleteTask} />
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