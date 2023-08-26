const App = () => {

  // Course name
  const course = 'Half Stack application development'
  
  // Array of parts, each with a name and exercises count
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ];

  //component to render course name 
  const Header = ({ course }) => {
    return (
      <h1>{course}</h1>
    );
  }

   //component to display the part name and exercises count
  const Part = ({ part, exercises }) => {
    return (
      <p>
        {part} {exercises}
      </p>
    );
  }
  

  //Map through each part and render using Part component
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part, index) => (
          <Part key={index} part={part.name} exercises={part.exercises} />
        ))}
      </div>
    );
  }

  //Calculate the total number of exercises using reduce
  const Total = ({ parts }) => {
    const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
  
    return (
      <p>Number of exercises {totalExercises}</p>
    );
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App