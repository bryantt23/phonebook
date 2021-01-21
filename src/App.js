import React, { useState } from 'react';
import PersonForm from './PersonForm';
import Filter from './Filter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [filterName, setFilterName] = useState('');

  const handleChange = event => {
    const target = event.target;
    const name = target.name;
    console.log(event.target.value);
    if (name === 'filterName') {
      setFilterName(event.target.value);
    }
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
      {/* <Filter handleChange={handleChange} /> */}
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      {res}
    </div>
  );
};

export default App;
