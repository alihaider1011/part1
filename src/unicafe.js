import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='Good' handleClick={() => setGood(good + 1)} />
      <Button text='Neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='Bad' handleClick={() => setBad(bad + 1)} />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = ({text, handleClick}) => 
<button onClick={handleClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  return(
    <div>
      <table>
        <tbody>
          <Statistic text='Good' value={good} />
          <Statistic text='Neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={good + neutral + bad} />
          <Statistic text='average' value={(good - bad) / (good + neutral + bad)} />
          <Statistic text='positive' value={((good) / (good + neutral + bad)) * 100} />
        </tbody>
      </table>
    </div>
  )
}

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

ReactDOM.render(<App />, 
  document.getElementById('root')
)