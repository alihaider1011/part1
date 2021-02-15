import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const parts = course.parts

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header =({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content =({parts}) => 

<div>
<div>{parts[0].name}</div>
<div>{parts[1].name}</div>
<div>{parts[2].name}</div>
</div>

const Total =({parts}) => {
  return(
  <p>Total number of exercises:  {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))