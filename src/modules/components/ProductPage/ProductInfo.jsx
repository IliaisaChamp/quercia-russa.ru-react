import React from 'react';
import ProductTable from './ProductTable';
import PropTypes from 'prop-types';

export default function ProductInfo({ data }) {
  const { info, description } = data;

  return (
    <>
      <ul className="nav nav-tabs flex-nowrap mb-2" id="myTab" role="tablist">
        <li className="nav-item w-50" role="presentation">
          <button
            className="nav-link active w-100 border text-dark"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Описание
          </button>
        </li>
        <li className="nav-item w-50" role="presentation">
          <button
            className="nav-link w-100 border text-dark"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Характеристики
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {description}
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <ProductTable data={info} />
        </div>
      </div>
    </>
  );
}

ProductInfo.propTypes = {
  data: PropTypes.object,
};
