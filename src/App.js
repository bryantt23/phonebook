import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 12345 }
  ]);
  const [newName, setNewName] = useState('Add name here');
  const [newNumber, setNewNumber] = useState('Add number here');

  const handleChange = event => {
    const target = event.target;
    const name = target.name;
    console.log(event.target.value);
    if (name === 'changeName') {
      setNewName(event.target.value);
    }
    if (name === 'changeNumber') {
      setNewNumber(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    let hasName = persons.map(person => person.name).includes(newName);
    if (hasName) {
      alert(newName + ' already exists');
      return;
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{' '}
          <input onChange={handleChange} value={newName} name='changeName' />
        </div>
        <div>
          number:{' '}
          <input
            onChange={handleChange}
            value={newNumber}
            name='changeNumber'
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => {
        return (
          <p key={index}>
            Name: {person.name}, Number: {person.number}
          </p>
        );
      })}
    </div>
  );
};

export default App;
