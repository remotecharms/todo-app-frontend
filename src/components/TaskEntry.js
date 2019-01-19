import React from 'react';

class TaskEntry extends React.Component {
    //every component in React will have a deafult constructor 
    //constructor is a function, super (props) calls a method in 'React.Component'
    //ensures that the props are specified. 
    constructor(props) {
        super(props);
        // default this.state to an empty string when the componenet first loads
        this.state = {
            taskDescription: ""
        };

        //Ensures that we bind the correct event handler 
        //and the function 'onSaveClicked' that is going to handle that event to this component 
        //and the OnSaveClick method gets fired
        //Event binding function, which is done in the constructor
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

        //before we clear out the taskDescription, we want to save the taskToBeAdded to our array
        this.props.onSaveTaskHandler(taskToBeAdded);

        //clears the text field next to save button
        this.setState({
            taskDescription: ""
        });

    }
    //when any key pressed in text field - this is the event handling 
    onTaskTextFieldUpdated(event) {
        const description = event.target.value; 
        //.target is the text box and .value will return what is in the textbox
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
        //'onClick' is the attachment - if add button clicked the onSaveClicked function will be called
        //'onChange' everytime a key is pressed in the text field it fires an event
        // which in turns fires the onTaskTextFieldUpdated function and it will update the TaskDescription
        // value={this.state.taskDescription} is watching the value of the text box
     ); 
 }

}

export default TaskEntry; 