import React from 'react';
import PropTypes from 'prop-types';

function Slider() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide mx-auto"
        data-bs-ride="carousel"
        style={{ maxWidth: 1000 + 'px' }}
      >
        <div className="carousel-inner d-flex">
          <div className="carousel-item slider-item active">
            <img
              src="/img/factory_1.jpg"
              className="d-block w-100 img-fluid slider-img"
              alt="..."
            />
          </div>
          <div className="carousel-item slider-item">
            <img
              src="/img/factory_2.jpg"
              className="d-block w-100 img-fluid slider-img"
              alt="..."
            />
          </div>
          <div className="carousel-item slider-item">
            <img
              src="/img/factory_5.jpg"
              className="d-block  w-100 img-fluid slider-img"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

Slider.propTypes = {
  props: PropTypes.object,
};

export default Slider;
