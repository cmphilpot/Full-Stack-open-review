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
  const total = parts.reduce((acc, curr) => {
    return acc += curr.exercises;
  }, 0);
 
  return (
    <>
      <p><strong>Total of exercises {total}</strong></p>
    </>
  )
}

const Course = ({ name, parts }) => {

  return (
    <>
      <div>
       <Header 
         name={name} 
       />
   
       <Content 
         parts={parts} 
       />

       <Total 
         parts={parts}
       />
     </div>
    </>
  )
}

const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return <Course 
                  key={course.id}
                  name={course.name} 
                  parts={course.parts}
                />
      }
      )}
    </>
  )
}

const App = () => {
  const courses = [ 
    {
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
  },
  {
    id: 2,
    name: 'Node.js',
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
]

  return <Courses courses={courses} />
}

export default App
