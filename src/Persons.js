import React from 'react';
import { deleteNumber as deleteNum } from './services/numbersService';

export default function Filter({ persons, filterName, setPersons }) {
  let filtered = persons.filter(person =>
    person.name.toLowerCase().startsWith(filterName.toLowerCase())
  );

  const deleteNumber = personToDelete => {
    console.log(personToDelete);
    if (window.confirm(`Delete ${personToDelete.name}`)) {
      deleteNum(personToDelete.id)
        .then(res => {
          const updatedPersons = persons.filter(
            person => person.id !== personToDelete.id
          );
          setPersons(updatedPersons);
          console.log('success', res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const res = filtered.map((person, index) => {
    return (
      <p key={index}>
        Name: {person.name}, Number: {person.number},{' '}
        <button
          onClick={() => {
            deleteNumber(person);
          }}
        >
          delete
        </button>
      </p>
    );
  });

  return <div>{res}</div>;
}
