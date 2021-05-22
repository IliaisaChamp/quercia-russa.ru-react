import React from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';

function Factory({ data }) {
  const { images } = data;
  return (
    <>
      <section className="factory" id="factory">
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="text-black mb-4 title-sized text-white text-uppercase">
                Производство
              </h2>
              <p className="text-black about-text mb-4 text-white">
                При производстве паркета технологи компании Кверча Руссо
                используют только современное оборудование и инструменты,
                бережно соблюдая технологии.
              </p>
            </div>
            <Slider images={images} />
          </div>
        </div>
      </section>
    </>
  );
}

Factory.propTypes = {
  data: PropTypes.object,
};

export default Factory;
