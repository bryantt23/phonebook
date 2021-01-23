import React, { useState } from 'react';
import axios from 'axios';

export default function PersonForm({ persons, setPersons }) {
  const [newName, setNewName] = useState('Add name here');
  const [newNumber, setNewNumber] = useState('Add number here');

  const handleSubmit = event => {
    event.preventDefault();
    let hasName = persons.map(person => person.name).includes(newName);
    if (hasName) {
      alert(newName + ' already exists');
      return;
    }
    const newPerson = { name: newName, number: newNumber, id: Date.now() };
    axios
      .post('http://localhost:3001/persons', newPerson)
      .then(res => {
        console.log(res.data);
        setPersons([...persons, newPerson]);
      })
      .catch(err => {
        console.log(err);
      });
  };

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

  return (
    <div>
      <h3>Add a new</h3>
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
    </div>
  );
}
