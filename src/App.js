import React, { useState, useEffect } from 'react';
import PersonForm from './PersonForm';
import Filter from './Filter';
import Persons from './Persons';
import { getAllNumbers } from './services/numbersService';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    getAllNumbers().then(res => {
      setPersons(res.data);
    });
  }, []);

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
      <Persons
        persons={persons}
        setPersons={setPersons}
        filterName={filterName}
      />
    </div>
  );
};

export default App;
