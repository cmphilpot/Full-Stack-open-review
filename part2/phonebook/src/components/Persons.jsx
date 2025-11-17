import Person from "./Person";

const Persons = ({ personsToShow, handleDelete }) => {
    return (
        <>
            <ul>
                {personsToShow.map((person) => {
                        return <Person 
                                    key={person.id} 
                                    name={person.name} 
                                    number={person.number} 

                                    id={person.id}
                                    personName={person.name}
                                    handleDelete={handleDelete}
                                />
                    }
                )}
            </ul>
        </>
    )
}
  
export default Persons;