import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        // default this.state to an empty string when the componenet first loads
        this.state = {
            taskDescription: ""
        };

        this.deleteItemFromList = this.deleteItemFromList.bind(this);
    }

    deleteItemFromList() {
        alert('Congratulations - Item has been deleted from the Wishlist');
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
            <input type="button" className="btn btn-danger" value="Delete" onClick={this.deleteItemFromList} />
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