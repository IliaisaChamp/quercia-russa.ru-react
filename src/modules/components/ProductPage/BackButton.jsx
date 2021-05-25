import React from 'react';
import { useHistory } from 'react-router-dom';
import backButton from '../../../assets/icons/chevron-left.svg';

export default function BackButton() {
  const history = useHistory();

  const styles = {
    display: 'flex',
    alignItems: 'center',
    color: '#00c06d',
    cursor: 'pointer',
    position: 'fixed',
    bottom: '18px',
    left: '5px',
    width: '80px',
    height: '40px',
    zIndex: 999,
    fontWeight: 300,
    textTransform: 'uppercase',
  };

  return (
    <div style={styles} onClick={() => history.goBack()}>
      <img src={backButton}></img>
      <span>назад</span>
    </div>
  );
}
