import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('Add name here');
  const [newNumber, setNewNumber] = useState('Add number here');
  const [filterName, setFilterName] = useState('');

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
    if (name === 'filterName') {
      setFilterName(event.target.value);
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

  let filtered = persons.filter(person =>
    person.name.toLowerCase().startsWith(filterName.toLowerCase())
  );

  const res = filtered.map((person, index) => {
    return (
      <p key={index}>
        Name: {person.name}, Number: {person.number}
      </p>
    );
  });
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with{' '}
      <input onChange={handleChange} value={filterName} name='filterName' />
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
      {res}
    </div>
  );
};

export default App;
