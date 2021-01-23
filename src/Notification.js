import React from 'react';

function Notification({ message }) {
  const successStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  };
  if (message === null) {
    return null;
  }

  return <div style={successStyle}>{message}</div>;
}

export default Notification;
