import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from '../../../assets/icons/emoji-dizzy.svg';

function Toast({ message, isToast }) {
  const [show, setShow] = useState(isToast ?? false);
  const toggleShowA = () => setShow(!show);

  return (
    <>
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 5 }}>
        <div
          className={show ? 'toast fade show' : 'toast fadeout hide'}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{ width: 'auto' }}
        >
          <div className="toast-header justify-content-between">
            <img src={emoji} className="rounded me-2" alt="emoji: dizzy" />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={toggleShowA}
            ></button>
          </div>
          <div className="toast-body" style={{ color: '#ff0f0f' }}>
            {message}
          </div>
        </div>
      </div>
    </>
  );
}

Toast.propTypes = {
  message: PropTypes.string,
  isToast: PropTypes.bool,
};

export default Toast;
