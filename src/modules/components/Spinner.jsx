import React from 'react';

export default function Spinner() {
  const wrapStyle = {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div style={wrapStyle}>
      <div
        className="spinner-border text-dark"
        role="status"
        style={{ width: `${5}rem`, height: `${5}rem` }}
      />
    </div>
  );
}
