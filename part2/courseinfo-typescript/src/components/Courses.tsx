import Course from './Course';
import type { CourseType } from '../types';
// import { Courses, Course } from '../types';

interface CoursesProps {
    courses: CourseType[]
} 

const Courses = ({ courses }: CoursesProps) => {
    return (
        <>
        {courses.map((course: CourseType) => {
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

export default Courses;