
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='*minus'
      />           
    </div>
  )
}

const Display = (props) => {
  return ( <div>
    <div>props.counter</div>
    <div>{props.counter}</div></div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
