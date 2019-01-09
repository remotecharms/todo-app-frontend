import React from 'react';

class Task extends React.Component {
 render () {
     return (
         <div className="row" style={styles.taskRow}>
            <div className="col"> 
                {this.props.taskDescription}
            </div>
            <div className="col"> 
            <input type="button" value="Delete" />
            </div>
            <div className="col"> 
            <input type="button" value="Done" />
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