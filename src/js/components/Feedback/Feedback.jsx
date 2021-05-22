import React from 'react';
import Form from './Form';

function Feedback() {
  return (
    <>
      <section className="feedback text-center" id="feedback">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-black mb-4 title-sized text-uppercase">
                напишите нам
              </h2>
              <p className="text-black feedback-text mb-4 fs-5">
                Расчитаем стоимость паркета c необходимыми доп. материалами!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feedback;
