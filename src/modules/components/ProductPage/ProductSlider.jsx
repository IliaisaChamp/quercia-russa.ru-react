import React from 'react';
import PropTypes from 'prop-types';
import shuffle from 'lodash/shuffle';

export default function ProductSlider({ images, path }) {
  const mappingImages = (data) => {
    const resData = shuffle(data.slice(1));
    return resData.map((img, id) => {
      return (
        <div
          key={id + 1}
          className="carousel-item"
          style={{ height: 550 + 'px' }}
        >
          <img
            src={`/img/${path}/` + img}
            className="d-block w-100 h-100"
            alt="Photo: parquet"
            style={{ objectFit: 'cover' }}
          />
        </div>
      );
    });
  };
  
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: `${550}px` }}>
            <img
              src={`/img/${path}/${images[0]}`}
              className="d-block w-100 h-100"
              alt="parquet"
              style={{ objectFit: 'cover' }}
            />
          </div>
          {mappingImages(images)}
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
      </div>
    </>
  );
}

ProductSlider.propTypes = {
  images: PropTypes.array,
  path: PropTypes.string,
};
