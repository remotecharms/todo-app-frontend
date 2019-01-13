import React from 'react';

class TaskCount extends React.Component {

//const { useState } = React

//const Button = ({ increment, onClickFunction }) => {
  //const handleClick = () => {
    //onClickFunction(increment)a
  }
  //return (
    //<button onClick={handleClick}>
      //+{increment}
    //</button>
  )
}

//const App = () => {
  //const [count, setCount] = useState(0)

 //const incrementCount = (increment) => {
    //setCount(count + increment)
  //}
  
  return (
    <div>
      <Button increment={1} onClickFunction={incrementCount} />
      <span>{count}</span>
    </div>
  )
}

//ReactDOM.render(<App />, document.getElementById('app'))

}
export default TaskCount;