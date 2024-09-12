const Header = (props) => {
  return(
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}
const Upper = (props) => {
  return(
    <div>
      {props.part1}:{props.exercises1}
    </div>
  )
} 
const Middle = (props) =>{
  return(
    <div>
      {props.part2}:{props.exercises2}
    </div>
  )
}
const Bottom = (props) =>{
  return(
    <div>
      {props.part3}:{props.exercises3}
    </div>
  )
}

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
      <Header course={course} />
      <Upper part1={part1} exercises1={exercises1}/>
      <Middle part2={part2} exercises2={exercises2}/>
      <Bottom part3={part3} exercises3={exercises3}/>
    </div>
  )
}

export default App