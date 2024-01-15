const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content name={part1}/>
      <Content name={part2}/>
      <Content name={part3}/>
      <Total number1={exercises1} number2={exercises2} number3={exercises3}/>
    </div>
  )
}

const Header = (props) => (
  <div>
    <h1>{props.course}</h1>
  </div>
)

const Content = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.number1 + props.number2 + props.number3}</p>
    </div>
  )
}

export default App
