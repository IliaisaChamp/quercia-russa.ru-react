import React from 'react';
import PropTypes from 'prop-types';

export default function CardImage({ src }) {
  return (
    <>
      <img src={src} className="card-img-top" alt="image: parquet" />
    </>
  );
}

CardImage.propTypes = {
  src: PropTypes.string,
};
