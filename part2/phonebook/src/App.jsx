import { useState } from 'react';
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    if (!isUniqueName(newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  }

  const personsToShow = persons.filter(person => {
    return person.name.toLowerCase().startsWith(newFilter.toLowerCase());
    }
  );

  const handleAddPerson = (event) => {
    setNewName(event.target.value);
  }

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  const isUniqueName = (name) => {
    return persons.filter(person => person.name === name).length === 0;
  }

  return (
    <div>
      <h2>Phonebook</h2>
        filter shown with 
        <input
          value={newFilter}
          onChange={handleFilter}
        />
      <h2>Add a new contact</h2>
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
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => {
            return <Person key={person.id} person={person} />
          }
        )}
      </ul>
    </div>
  )
}

export default App