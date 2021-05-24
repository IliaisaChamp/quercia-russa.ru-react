import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import schema from './validate';
import SuccessMessage from './SuccessMessage';
import Toast from './Toast';
import keys from '../../../keys/keys.dev';

const URL = `https://api.telegram.org/bot${keys.TELEGRAM_KEY}/sendMessage?chat_id=${keys.TELEGRAM_CHAT_ID}&text=`;
function Form() {
  const [isToast, setToast] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  // const [unsuccessfulMessage, setUnsuccessfulMessage] = useState();
  const isValidateStatus = (status) => status >= 200 && status < 300;

  const callback = useCallback(async () => {
    const form = document.querySelector('.form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      setToast(false);
      const fomData = new FormData(form);
      const name = fomData.get('name');
      const phone = fomData.get('phone');
      const text = fomData.get('text');
      const message = `${name}, ${phone}, ${text}`;
      try {
        await schema.validate({ name, phone });
        const response = await axios.get(URL + message);
        // eslint-disable-next-line no-unused-expressions
        isValidateStatus(response.status)
          ? setIsSuccess(true)
          : setIsSuccess(false);
        form.reset();
        setIsSuccess(true);
      } catch (error) {
        if (error) {
          setErrorMessage(error.message);
          setToast(true);
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
          <div className="mb-4" style={{ height: `${50}px` }}>
            <input
              name="name"
              type="text"
              className="form-control mx-auto fw-light rounded-0"
              placeholder="Ваше имя"
            />
          </div>
          <div className="mb-4" style={{ height: `${50}px` }}>
            <input
              name="phone"
              type="tel"
              className="form-control mx-auto fw-light rounded-0"
              placeholder="Телефон"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control fw-light rounded-0 textarea"
              id="exampleFormControlTextarea1"
              rows="5"
              name="text"
              placeholder="Сообщение"
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="btn w-100 btn-success mb-3 form-button rounded-0 text-uppercase"
            >
              Отправить
            </button>
          </div>
          {isToast ? <Toast message={errorMessage} isToast={isToast} /> : null}
        </form>
      )}
    </>
  );
}

export default Form;
