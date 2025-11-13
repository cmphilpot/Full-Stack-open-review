const PersonForm = ({ 
    addPerson,  
    newName,
    handleAddPerson,
    newNumber,
    handleAddNumber
}) => {
    return (
        <form onSubmit={addPerson}>
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