import React from 'react';
import { useHistory } from 'react-router-dom';

export default function BackButton() {
  const history = useHistory();

  return (
    <>
      <img
        src="/img/icons/arrow.svg"
        className="button-back"
        onClick={() => history.goBack()}
      ></img>
    </>
  );
}
