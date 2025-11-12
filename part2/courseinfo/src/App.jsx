const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => {
        return <Part 
                  key={part.id}
                  name={part.name} 
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
      <p>{part.name} {part.exercises}</p>
    </>
  )
}

const Total = ({ parts }) => {
  console.log(parts);
  const total = parts.reduce((acc, curr) => {
    return acc += curr.exercises;
  }, 0);
 
  return (
    <>
      <p><strong>Total of exercises {total}</strong></p>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <div>
       <Header 
         name={course.name} 
       />
   
       <Content 
         parts={course.parts} 
       />

       <Total 
         parts={course.parts}
       />
     </div>
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return <Course course={course} />
}

export default App
