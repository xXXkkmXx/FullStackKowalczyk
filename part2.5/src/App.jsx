const Course = ({ course }) => {
  return (
    <>
      {course.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      ))}
    </>
  );
};

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
};  

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  
  return <h3>Total of {totalExercises} exercises</h3>;
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <>
      <h1>Web development curriculum</h1>
      <Course course={courses} />
    </>
  );
};

export default App;
