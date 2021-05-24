import React, { useEffect, useState } from 'react';
import emojiSmile from '../../../assets/icons/emoji-smile.svg';

export default function SuccessMessage() {
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div
        className="row justify-content-center"
        style={{ height: 200 + 'px' }}
      >
        <div className="col py-5">
          {!isLoading ? (
            <div
              className="spinner-border text-success"
              role="status"
              style={{ width: 5 + 'rem', height: 5 + 'rem' }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <>
              <p className="fs-5">
                Cообщение отправлено. <br /> Мы свяжемся с Вами так скоро,
                насколько это возможно
              </p>
              <img
                src={emojiSmile}
                alt="emoji: smile"
                style={{ width: 4 + 'rem' }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
