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

export default Total;