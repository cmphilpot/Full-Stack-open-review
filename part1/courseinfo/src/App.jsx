
const App = () => {

  const Header = ({course}) => {
    return (
      <>
        <h1>{course}</h1>
      </>
    )
  }
  
  const Content = ({partsContent}) => {

    return (
      <>
        {partsContent.map((part) => {
          return <Part 
                    key={part.id}
                    part={part.part} 
                    exercises={part.exercises}
                  />
        }
        )}
      </>
    )
  }
  
  const Part = (part) => {
    return (
      <>
        <p>{part.part} {part.exercises}</p>
      </>
    )
  }

  const Total = ({ exercises1, exercises2, exercises3 }) => {
    const total = exercises1 + exercises2 + exercises3;

    return (
      <>
        <p>Number of exercises {total}</p>
      </>
    )
  }

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const partsContent = [
    { id: 1, part: 'Fundamentals of React', exercises: 10 },
    { id: 2, part: 'Using props to pass data', exercises: 7 },
    { id: 3, part: 'State of a component', exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
   
      <Content 
        partsContent={partsContent} 
      />

      <Total 
        exercises1={exercises1} 
        exercises2={exercises2} 
        exercises3={exercises3} 
      />
    </div>
  )
}

export default App
