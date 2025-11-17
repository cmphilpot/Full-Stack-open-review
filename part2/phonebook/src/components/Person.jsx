const Person = ({ 
  id, 
  name, 
  number, 
  handleDelete 
}) => {
    return ( 
      <>
        <li>{name}: {number}</li> <button onClick={() => handleDelete(id)}>delete</button>
      </>
    )
  }
  
export default Person;