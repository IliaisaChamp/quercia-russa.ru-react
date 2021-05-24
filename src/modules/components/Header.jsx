import React from 'react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <>
      <Navigation />
      <header className="header vh-100">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="header-title text-uppercase mb-0">паркет</h1>
            <p className="header-subtitle text-uppercase mb-5">
              собственного производства
            </p>
            <a
              className="btn btn-success btn-lg mt-auto text-uppercase header-button rounded-0"
              href="#feedback"
              role="button"
            >
              расчитать стоимость бесплатно
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
