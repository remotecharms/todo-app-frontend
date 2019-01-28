import React from 'react';

// class TaskEntry extends React.Component {
    class TaskEntry extends React.Component {
    //every component in React will have a default constructor 
    //constructor is a function, super (props) calls a method in 'React.Component'
    //ensures that the props are specified. 
    constructor(props) {
        super(props);
        // default this.state to an empty string when the component first loads
        this.state = {
            taskDescription: ""
        };

        //Ensures that we bind the correct event handler 
        //and the function 'onAddClicked' that is going to handle that event to this component 
        //and the OnAddClick method gets fired
        //Event binding function, which is done in the constructor
        this.onAddClicked = this.onAddClicked.bind(this);
        this.onTaskTextFieldUpdated = this.onTaskTextFieldUpdated.bind(this);
    }

    // This function executes when the add button is clicked. 
    onAddClicked() {
        console.log('onaddclicked invoked')
        const taskToBeAdded = {
            id: (Math.random() * 100),
            description: this.state.taskDescription,
            completed: false
        };

        //before we clear out the taskDescription, we want to save the taskToBeAdded to our array
        this.props.onAddTaskHandler(taskToBeAdded);

        //clears the text field next to add button
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
    
 render () {
     return (
         // the value of the text box is watching the value of the state - the text box will execute an on text event
         <div className="row" style={styles.taskTextField}> 
            <div className= "col" > 
            <input type="text" value= {this.state.taskDescription} placeholder="Please add items to the list" onChange={this.onTaskTextFieldUpdated} size="50"/>
            </div>
                <div className="col" style={styles.addButton}> 
                <input type="button" className="btn btn-secondary" value="Add" onClick={this.onAddClicked}/>
                </div>
                <div className="col">
                </div>
            </div>
        //'onClick' is the attachment - if add button clicked the onAddClicked function will be called
        //'onChange' everytime a key is pressed in the text field it fires an event
        // which in turns fires the onTaskTextFieldUpdated function and it will update the TaskDescription
        // value={this.state.taskDescription} is watching the value of the text box
     ); 
 }

}

const styles = {
    taskTextField: {
        textAlign: "center",
    },
    addButton: {
        textAlign: "right"
    }
}
// styling the components added in line and a separate css file included 
export default TaskEntry; 