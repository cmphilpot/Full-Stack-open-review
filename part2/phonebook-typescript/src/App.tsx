import React from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = React.useState([
    { id: 1, name: 'Arto Hellas', phoneNumber: '040-123456' }
  ]) 
  const [newName, setNewName] = React.useState<string>('');
  const [newNumber, setNewNumber] = React.useState<string>('');
  const [newFilter, setFilter] = React.useState<string>('');

  const addPerson = (event: any) => {
    event.preventDefault();

    if (!isUniqueName(newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    const newPerson = {
      id: persons.length + 1,
      name: newName,
      phoneNumber: String(newNumber)
    }

    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  }

  const personsToShow = persons.filter(person => {
      return person.name.toLowerCase().startsWith(newFilter.toLowerCase());
    }
  );

  const handleAddPerson = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  }

  const handleAddNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(event.target.value);
  }

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  }

  const isUniqueName = (name: string) => {
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
