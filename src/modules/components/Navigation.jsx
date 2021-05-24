import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

function Navigation(props) {
  const { location } = props;
  useEffect(() => {
    if (location.pathname === '/') {
      const setMenuBackground = () => {
        const navigation = document.querySelector('.navigation');
        if (window.pageYOffset > 500) {
          navigation.classList.add('bg-scroll');
        } else {
          navigation.classList.remove('bg-scroll');
        }
      };
      window.addEventListener('scroll', setMenuBackground, true);
      return () => {
        window.removeEventListener('scroll', setMenuBackground, true);
      };
    }
  }, [location.pathname]);

  return (
    <nav className="navbar navigation navbar-expand-lg navbar-light fixed-top bg-mobile">
      <div className="container">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler border-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a
              className="nav-link navigation-link active"
              aria-current="page"
              href="#"
            ></a>
            <a className="nav-link navigation-link text-white" href="#services">
              Сервис
            </a>
            <a className="nav-link navigation-link text-white" href="#cards">
              Пародукция
            </a>
            <a className="nav-link navigation-link text-white" href="#factory">
              Производство
            </a>
            <a className="nav-link navigation-link text-white" href="#contacts">
              Контакты
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  location: PropTypes.object,
};

export default withRouter(Navigation);
