import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function CardInfo({ info }) {
  const { title, price, link } = info;

  return (
    <>
      <div className="card-img-overlay" style={{ top: 'auto' }}>
        <a href={link}>
          <h5 className="card-title fs-2 text-uppercase text-white">{title}</h5>
        </a>
        <p className="card-text text-white">
          от <span className="fs-3">{price}</span> руб/м2
        </p>
        <NavLink
          exact
          className="btn btn-lg btn-success card-button rounded-0"
          to={link}
        >
          Подробнее
        </NavLink>
      </div>
    </>
  );
}

CardInfo.propTypes = {
  info: PropTypes.object,
};
