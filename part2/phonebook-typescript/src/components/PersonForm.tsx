
interface PersonFormProps {
    addPerson: (React.FormEventHandler<HTMLFormElement>);  
    newName: string,
    handleAddPerson: (event: React.ChangeEvent<HTMLInputElement>) => void;
    newNumber: number | string,
    handleAddNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const PersonForm = ({ 
    addPerson,  
    newName,
    handleAddPerson,
    newNumber,
    handleAddNumber
}: PersonFormProps) => {
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