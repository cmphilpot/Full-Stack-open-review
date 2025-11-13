import Course from './Course';

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

export default Courses;