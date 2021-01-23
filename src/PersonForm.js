import React, { useState } from 'react';
import { addNumber, updateNumber } from './services/numbersService';
import Notification from './Notification';

export default function PersonForm({ persons, setPersons }) {
  const [message, setMessage] = useState('');
  const [classStyle, setClassStyle] = useState('');

  const [newName, setNewName] = useState('Add name here');
  const [newNumber, setNewNumber] = useState('Add number here');

  const showTemporaryMessage = (message, style) => {
    setMessage(message);
    setClassStyle(style);

    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    let hasName = persons.map(person => person.name).includes(newName);
    if (hasName) {
      const curPerson = persons.find(person => person.name === newName);
      console.log('curPerson', curPerson);
      if (
        window.confirm(
          newName +
            ' already exists in the phone book, replace the old number with a new one?'
        )
      ) {
        const updatedPerson = { ...curPerson, number: newNumber };
        try {
          const res = await updateNumber(updatedPerson);
          const personsUpdated = persons.map(person => {
            return person.id === updatedPerson.id ? updatedPerson : person;
          });
          setPersons(personsUpdated);
          console.log(res);
          showTemporaryMessage(
            `${curPerson.name}'s number has been updated from ${curPerson.number} to ${newNumber}`,
            'success'
          );
        } catch (error) {
          console.log(curPerson);
          setClassStyle('error');
          showTemporaryMessage(
            `Information of ${curPerson.name} has already been removed from server`,
            'error'
          );
          console.log(error);
        }

        // updateNumber(updatedPerson)
        //   .then(res => {
        //     console.log(res);
        //     const personsUpdated = persons.map(person => {
        //       return person.id === updatedPerson.id ? updatedPerson : person;
        //     });
        //     setPersons(personsUpdated);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
      }
      return;
    }
    const newPerson = { name: newName, number: newNumber, id: Date.now() };
    addNumber(newPerson)
      .then(res => {
        console.log(res.data);
        setPersons([...persons, newPerson]);
        showTemporaryMessage(`Added ${newPerson.name}`, 'success');
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
      <Notification message={message} classStyle={classStyle} />
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
