import React, { useState, useEffect } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('Add name here');

  const handleChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  // let res;
  // useEffect(() => {
  //   res = persons.map((person, index) => {
  //     return <p key={index}>{person.name}</p>;
  //   });
  // }, [persons]);

  const handleSubmit = event => {
    // debugger;
    setPersons([...persons, { name: newName }]);
    event.preventDefault();
    // console.log(event.target.value);
    // setNewName(event.target.value);
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
      {/* {JSON.stringify(persons)} */}
      {persons.map((person, index) => {
        return <p key={index}>Name: {person.name}</p>;
      })}
      {/* res: {res} */}
    </div>
  );
};

export default App;
