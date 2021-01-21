import React from 'react';

export default function PersonForm({
  handleChange,
  persons,
  setPersons,
  newName,
  newNumber
}) {
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
