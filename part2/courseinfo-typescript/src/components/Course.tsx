import Header from './Header'
import Content from './Content'
import Total from './Total'
import type { PartType } from '../types'

interface CourseProps {
    name: string,
    parts: PartType[]
}

const Course = ({ name, parts }: CourseProps) => {
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

  export default Course;