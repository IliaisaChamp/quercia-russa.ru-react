import React from 'react';

export default function Spinner() {
  return (
    <>
      <div className="spinner-grow text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );
}
