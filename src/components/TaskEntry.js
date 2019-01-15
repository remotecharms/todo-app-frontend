import React from 'react';

class TaskEntry extends React.Component {

    constructor(props) {
        super(props);
        // default this.state to an empty string when the componenet first loads
        this.state = {
            taskDescription: ""
        };

        // Event binding function, which is done in the constructor
        this.onSaveClicked = this.onSaveClicked.bind(this);
        this.onTaskTextFieldUpdated = this.onTaskTextFieldUpdated.bind(this);
    }

    // This function executes when the save button is clicked. 
    onSaveClicked() {

        const taskToBeAdded = {
            id: (Math.random() * 100),
            description: this.state.taskDescription,
            completed: false
        };

        this.props.onSaveTaskHandler(taskToBeAdded);

        //clear the text field next to save button
        this.setState({
            taskDescription: ""
        });

    }
    //when any key pressed in text field - this is the event handling 
    onTaskTextFieldUpdated(event) {
        const description = event.target.value; 

        this.setState({
            taskDescription: description
        });
    }
    
    deleteItemFromList () {
        alert('Item deleted from WishList');
    }

 render () {
     return (
         // the value of the text box is watching the value of the state - the text box will execute an on text event
         <div className="row">
            <div className= "col"> 
            <input type="text" value={this.state.taskDescription} onChange={this.onTaskTextFieldUpdated} />
            </div>
                <div className="col">
                <input type="button" value="Add" onClick={this.onSaveClicked} />
                </div>
            </div>
        //if save button clicked the alert will be fired.
     ); 
 }

}

export default TaskEntry; 