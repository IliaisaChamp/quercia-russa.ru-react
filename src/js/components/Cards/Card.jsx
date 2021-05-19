import React from 'react';
import PropTypes from 'prop-types';
import CardImage from './CardImage';
import CardInfo from './CardInfo';

export default function Goods(props) {
  const { data } = props;

  const mappingCards = (cards) => {
    return cards.map((card, id) => {
      return (
        <div key={id + 1} className="col ">
          <div className="card border-0 h-100">
            <>
              <CardImage src={card.preview} />
              <CardInfo info={card} />
            </>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="cards" id="cards">
      <div className="container">
        <div className="row p-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="text-black mb-4 title-sized text-uppercase">
              наш паркет
            </h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
          {mappingCards(data)}
        </div>
      </div>
    </section>
  );
}

Goods.propTypes = {
  data: PropTypes.array,
};
