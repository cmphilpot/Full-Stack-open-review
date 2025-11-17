import { useState, useEffect } from 'react';
import personService from './services/persons';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setFilter] = useState('');

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons);
    })
  }, [])

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

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
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
      <Filter 
        newFilter={newFilter}
        handleFilter={handleFilter}
      />

      <h3>Add a new contact</h3>

      <PersonForm 
        addPerson={addPerson}  
        newName={newName}
        handleAddPerson={handleAddPerson}
        newNumber={newNumber}
        handleAddNumber={handleAddNumber}
      />

      <h3>Numbers</h3>

      <Persons 
        personsToShow={personsToShow}
      />
    </div>
  )
}

export default App