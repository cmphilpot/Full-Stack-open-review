import Person from "./Person";
import type { PersonType } from '../types';

interface PersonsProps {
    personsToShow: PersonType[]
}

const Persons = ({ personsToShow }: PersonsProps) => {
    return (
        <>
            <ul>
                {personsToShow.map((person) => {
                        return <Person key={person.id} name={person.name} phoneNumber={person.phoneNumber} />
                    }
                )}
            </ul>
        </>
    )
}
  
export default Persons;