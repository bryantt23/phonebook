import React, { useState } from 'react';

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
    setPersons([...persons, { name: newName, number: newNumber }]);
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
