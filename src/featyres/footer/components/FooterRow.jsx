import React from 'react';
import '../styles/footer-row.scss';

const FooterRow = () => {
  return (
    <div className="container">
      <div className="footer-row">
        <div className="footer-column">
          <nav className="footer-navigation">
            <ul className="footer-navigation-list">
              <li className="footer-navigation-list__item column-title">
                <a className="folow-us-list__item-link" href="#">
                  Пасажирам
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Розклад рейсів
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Замовлення послуг
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Контактна інформація
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Політика конфіденційності
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Форма відгуків та пропозицій
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-column">
          <nav className="footer-navigation">
            <ul className="footer-navigation-list">
              <li className="footer-navigation-list__item column-title">
                <a className="folow-us-list__item-link" href="#">
                  Партнерам
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Головна
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Наземне обслуговування
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Характеристики аеродрому
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Учбовий центр
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Ваканciї
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-column">
          <nav className="footer-navigation">
            <ul className="footer-navigation-list">
              <li className="footer-navigation-list__item  column-title">
                <a className="folow-us-list__item-link" href="#">
                  Пресцентр
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Головна пресцентрy
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Останні новин
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Соціальні та артпроект
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Фінансова звітніст
                </a>
              </li>
              <li className="footer-navigation-list__item">
                <a className="folow-us-list__item-link" href="#">
                  Статистика пасажиропотоку
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-column">
          <div className="footer-contakts">
            <div className="helephone">
              <div className="title">Авіадовідка</div>
              <div className="number">
                <a className="folow-us-list__item-link">+38 (044) 500 49 73</a>
              </div>
            </div>
            <div className="folow-us">
              <div className="title">Приєднуйтесь до нас</div>
              <ul className="folow-us-list">
                <li className="folow-us-list__item">
                  <a className="folow-us-list__item-link">
                    <img src="/" alt="fk" />
                  </a>
                </li>
                <li className="folow-us-list__item">
                  <a className="folow-us-list__item-link">
                    <img src="/" alt="tv" />
                  </a>
                </li>
                <li className="folow-us-list__item">
                  <a className="folow-us-list__item-link">
                    <img src="/" alt="ins" />
                  </a>
                </li>
                <li className="folow-us-list__item">
                  <a className="folow-us-list__item-link">
                    <img src="/" alt="yt" />
                  </a>
                </li>
                <li className="folow-us-list__item">
                  <a className="folow-us-list__item-link">
                    <img src="/" alt="in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterRow;
