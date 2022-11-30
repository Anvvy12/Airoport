import React from 'react';
import '../styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo-container">
          <img src="../../../img/logo@2x.webp" className="logo-container__logo" alt="logo" />
        </div>
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <span className="navigation-list__item-text">Пасажирам</span>
            </li>
            <li className="navigation-list__item">
              <span className="navigation-list__item-text">Послуги IEV</span>
            </li>
            <li className="navigation-list__item">
              <span className="navigation-list__item-text">VIP</span>
            </li>
            <li className="navigation-list__item">
              <span className="navigation-list__item-text">Партнерам</span>
            </li>
            <li className="navigation-list__item">
              <span className="navigation-list__item-text">Пресцентр</span>
            </li>
            <li className="navigation-list__item">
              <button className="navigation-list__item-btn">UA</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
