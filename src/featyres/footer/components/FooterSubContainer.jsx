import React from 'react';
import '../styles/footer-sub-container.scss';

const FooterSubContainer = () => {
  return (
    <div className="container">
      <div className="sub-footer">
        <div className="info-left">
          <div className="info-left__text">
            © 2011-2021 <br />
            Міжнародний аеропорт «Київ»
          </div>
        </div>
        <div className="info-rigth">
          <div>
            Part of{' '}
            <b>
              {' '}
              Ufuture <br /> Investment Group
            </b>
          </div>
          <div className="made-by">Розробка сайту </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSubContainer;
