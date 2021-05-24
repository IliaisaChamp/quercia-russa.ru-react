import React from 'react';
import instagram from '../../assets/icons/instagram.svg';
export default function Footer() {
  return (
    <>
      <footer className="footer" id="contacts">
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="text-black mb-4 title-sized text-uppercase text-white">
                контакты
              </h2>
              <p className="text-black about-text mb-4"></p>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div
              className="card mb-3 rounded-3 footer-card bg-transparent"
              style={{ width: 20 + 'rem' }}
            >
              <div className="card-body text-center p-3">
                <h5 className="card-title text-white">Адрес:</h5>
                <div className="line mx-auto"></div>
                <p className="card-text fs-6 footer-card__text">
                  Москва, Нахимовский проспект, 24, павильон 3, стенды: 240,
                  425. ЭКСПОСТРОЙ
                </p>
              </div>
            </div>
            <div
              className="card mb-3 rounded-3 footer-card bg-transparent"
              style={{ width: 20 + 'rem' }}
            >
              <div className="card-body text-center p-3">
                <h5 className="card-title text-white">Компания:</h5>
                <div className="line mx-auto"></div>
                <p className="card-text fs-6 footer-card__text">
                  ООО &quot;НЕВА&quot;
                </p>
                <p className="card-text fs-6 footer-card__text">
                  ИНН: 7720601632
                </p>
              </div>
            </div>
            <div
              className="card mb-3 rounded-3 footer-card bg-transparent"
              style={{ width: 20 + 'rem' }}
            >
              <div className="card-body text-center p-3">
                <h5 className="card-title text-white">Телефоны:</h5>
                <div className="line mx-auto"></div>
                <p className="card-text fs-6 footer-card__text ">
                  <a href="tel:+79160661932">+7 916 066-19-32</a>
                </p>
                <p className="card-text fs-6 footer-card__text ">
                  <a href="tel:+79055778171">+7 905 577-81-71</a>
                </p>
                <p className="card-text fs-6 footer-card__text ">
                  <a href="tel:+79162865998">+7 916 286-59-98</a>
                </p>
                <p className="card-text fs-6 footer-card__text ">
                  <a href="#">quercia-russa@mail.ru</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="https://www.instagram.com/querciarussa.ru/">
                <img
                  src={instagram}
                  className="rounded mx-auto d-block"
                  alt="instagram"
                  style={{ width: 3 + 'rem' }}
                />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
