import React from 'react';

export default function Filter({ persons, filterName }) {
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

  return <div>{res}</div>;
}
