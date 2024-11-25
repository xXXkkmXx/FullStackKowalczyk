const Header = ({props}) =>{
  return <h1>{props.name}</h1>
}
const Content = ({parts}) =>{
  return(
    <>
      {parts.map((part)=>{
        return(
          <div key={part.name}>
            <h2>{part.name}</h2>
            <h3>{part.exercises}</h3>
          </div>
        )
      })}
    </>
  );
};

const Total = ({props}) =>{
  const result = props.parts.reduce((sum,part)=> sum + part.exercises ,0);
  return <h3>Total of {result} exercises</h3>;
}

function App() {
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
  return (
    <div>
      <Header props={course}/>
      <Content parts={course.parts}/>
      <Total props={course}/>
    </div>
  )
}

export default App
