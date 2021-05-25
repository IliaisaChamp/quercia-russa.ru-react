import React from 'react';
import PropTypes from 'prop-types';

function Services({ services }) {
  const mappingServices = (data) => {
    return data.map((el, id) => {
      return (
        <div key={id + 1} className="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <h4>
            <strong>{el.title}</strong>
          </h4>
          <div className="line mx-auto"></div>
          <p className="text-faded mb-0">{el.text}</p>
        </div>
      );
    });
  };

  return (
    <>
      <section className="services" id="services" data-bs-spy="scroll">
        <div className="container">
          <div className="col-lg-8 mx-auto text-center pt-5">
            <h2 className="text-black mb-4 services-title title-sized text-uppercase">
              сервис
            </h2>
          </div>
          <div className="row pt-5 text-center">
            {mappingServices(services)}
          </div>
        </div>
      </section>
    </>
  );
}

Services.propTypes = {
  services: PropTypes.array,
};

export default Services;
