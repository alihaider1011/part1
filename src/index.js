import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const voting =() => {
    console.log(votes)
    console.log(selected)
    const copy = [...votes]
    copy[selected] ++
    setVotes(copy)
  }
  const highest = () => votes.indexOf(Math.max(...votes))

  console.log(Math.floor(Math.random()* anecdotes.length))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <Button text= 'Next Anecdote' handleClick={() => 
        setSelected(Math.floor(Math.random() * anecdotes.length))} />
      <Button text= 'Vote' handleClick={voting} />
      <h1>Anecdote with Most Votes</h1>
      <p>{anecdotes [highest ()]}</p>
      <p>has {votes [highest ()]} votes</p>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>{text}</button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
