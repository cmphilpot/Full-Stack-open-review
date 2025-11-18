const PersonForm = ({ 
    handleSubmit,  
    newName,
    handleAddPerson,
    newNumber,
    handleAddNumber,
}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
            name: 
            <input 
                value={newName}
                onChange={handleAddPerson}
            />
            </div>
            <div>
            number: 
            <input 
                value={newNumber}
                onChange={handleAddNumber}
            />
            </div>

            <div>
            <button type="submit">add</button>
            </div>
      </form>
    )
}
  
export default PersonForm;