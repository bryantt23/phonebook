import React, { useState } from 'react';
import PersonForm from './PersonForm';
import Filter from './Filter';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [filterName, setFilterName] = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        persons={persons}
        filterName={filterName}
        setFilterName={setFilterName}
      />
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} filterName={filterName} />
    </div>
  );
};

export default App;
