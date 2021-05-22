import React from 'react';
import PropTypes from 'prop-types';

function Slider({ images }) {
  const mappingSliderImg = (data) => {
    const images = data.slice(1);
    return images.map((image, id) => {
      return (
        <div key={id + 1} className="carousel-item factory-slider__item">
          <img
            src={`/img/factory/${image}`}
            className="d-block w-100 img-fluid factory-slider__item-img"
            alt="Photo: factory"
          />
        </div>
      );
    });
  };
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide mx-auto"
        data-bs-ride="carousel"
        style={{ maxWidth: 1000 + 'px' }}
      >
        <div className="carousel-inner d-flex">
          <div className="carousel-item factory-slider__item active">
            <img
              src={`/img/factory/${images[0]}`}
              className="d-block w-100 img-fluid factory-slider__item-img"
              alt="Photo: factory"
            />
          </div>
          {mappingSliderImg(images)}
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
  images: PropTypes.array,
};

export default Slider;
