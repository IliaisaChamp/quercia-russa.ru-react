import React, { useEffect, useState, useCallback } from 'react';
import schema from './validate';
import axios from 'axios';
import SuccessMessage from './SuccessMessage';

import { TELEGRAM_KEY, TELEGRAM_CHAT_ID } from '../../env';
const URL = `https://api.telegram.org/bot${TELEGRAM_KEY}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=`;

function Form() {
  const [error, setError] = useState(null);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [nameDisplay, setNameDisplay] = useState();
  const [phoneDisplay, setPhoneDisplay] = useState();
  const [isSuccess, setIsSuccess] = useState(null);
  const [unsuccessfulMessage, setUnsuccessfulMessage] = useState();
  const isValidateStatus = (status) => status >= 200 && status < 300;

  const onChangeErrors = (err) => {
    if (err.name) {
      setNameError(err.message);
      setNameDisplay({ display: 'block', color: 'red' });
    }
    if (err.phone) {
      setPhoneError(err.message);
      setPhoneDisplay({ display: 'block', color: 'red' });
    }
    setUnsuccessfulMessage('ошибка сети');
  };

  const callback = useCallback(async () => {
    const form = document.querySelector('.form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fomData = new FormData(form);
      const name = fomData.get('name');
      const phone = fomData.get('phone');
      const text = fomData.get('text');
      const message = `${name}, ${phone}, ${text}`;
      try {
        await schema.validate({ name: name, phone: phone });
        // const response = await axios.get(URL + message);
        // isValidateStatus(response.status)
        //   ? setisSuccess(
        //       'Ваше сообщение успешно отправлено, мы скоро вам перезвоним'
        //     )
        //   : false;
        // form.reset();
        setIsSuccess(true);
      } catch (error) {
        if (error) {
          onChangeErrors(error);
        }
      }
    });
  }, []);

  useEffect(() => {
    callback();
  }, [callback]);

  return (
    <>
      {isSuccess ? (
        <SuccessMessage />
      ) : (
        <form action="" className="form">
          <div className="mb-4" style={{ height: 50 + 'px' }}>
            <input
              name="name"
              type="text"
              className="form-control mx-auto fw-light rounded-0"
              placeholder="Ваше имя"
            />
            <span style={nameDisplay}>{nameError}</span>
          </div>
          <div className="mb-4" style={{ height: 50 + 'px' }}>
            <input
              name="phone"
              type="tel"
              className="form-control mx-auto fw-light rounded-0"
              placeholder="Телефон"
            />
            <span style={phoneDisplay}>{phoneError}</span>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control fw-light rounded-0 textarea"
              id="exampleFormControlTextarea1"
              rows="5"
              name="text"
              placeholder="Сообщение"
            ></textarea>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="btn w-100 btn-success mb-3 form-button rounded-0"
            >
              Отправить
            </button>
          </div>
        </form>
      )}
    </>
  );
}

Form.propTypes = {};

export default Form;
