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
                <a href="#">Пасажирам</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Розклад рейсів</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Замовлення послуг</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Контактна інформація</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Політика конфіденційності</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Форма відгуків та пропозицій</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-column">
          <nav className="footer-navigation">
            <ul className="footer-navigation-list">
              <li className="footer-navigation-list__item column-title">
                <a href="#">Партнерам</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Головна</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Наземне обслуговування</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Характеристики аеродрому</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Учбовий центр</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Ваканciї</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-column">
          <nav className="footer-navigation">
            <ul className="footer-navigation-list">
              <li className="footer-navigation-list__item  column-title">
                <a href="#">Пресцентр</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Головна пресцентрy</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Останні новин</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Соціальні та артпроект</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Фінансова звітніст</a>
              </li>
              <li className="footer-navigation-list__item">
                <a href="#">Статистика пасажиропотоку</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-column">
          <div className="footer-contakts">
            <div className="helephone">
              <div className="title">Авіадовідка</div>
              <div className="number">
                <a>+38 (044) 500 49 73</a>
              </div>
            </div>
            <div className="folow-us">
              <div className="title">Приєднуйтесь до нас</div>
              <ul className="folow-us-list">
                <li className="folow-us-list__item">
                  <a>
                    <img src="/" alt="fk" />
                  </a>
                </li>
                <li className="folow-us-list__item">
                  <a>
                    <img src="/" alt="tv" />
                  </a>
                </li>
                <li className="folow-us-list__item">
                  <a>
                    <img src="/" alt="ins" />
                  </a>
                </li>
                <li className="folow-us-list__item">
                  <a>
                    <img src="/" alt="yt" />
                  </a>
                </li>
                <li className="folow-us-list__item">
                  <a>
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
