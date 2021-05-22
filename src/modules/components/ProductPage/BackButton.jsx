import React from 'react';
import { useHistory } from 'react-router-dom';
import backButton from '../../../assets/icons/arrow.svg';

export default function BackButton() {
  const history = useHistory();

  return (
    <>
      <img
        src={backButton}
        className="button-back"
        onClick={() => history.goBack()}
      ></img>
    </>
  );
}
