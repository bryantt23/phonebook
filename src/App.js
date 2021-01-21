import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('Add name here');

  const handleChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleSubmit = event => {
    setPersons([...persons, { name: newName }]);
    event.preventDefault();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => {
        return <p key={index}>Name: {person.name}</p>;
      })}
    </div>
  );
};

export default App;
