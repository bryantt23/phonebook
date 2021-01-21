import React from 'react';

export default function Filter({ setFilterName, filterName }) {
  const handleChange = event => {
    setFilterName(event.target.value);
  };

  return (
    <div>
      filter shown with{' '}
      <input onChange={handleChange} value={filterName} name='filterName' />
    </div>
  );
}
