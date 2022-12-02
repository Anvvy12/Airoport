import React from 'react';
import '../styles/covid-info.scss';

const CovidInfo = () => {
  return (
    <div className="covid-container">
      <div className="covid-info">
        <a className="covid-info__link">
          <span className="covid-info__link-text">
            Тестування на COVID-19 у аеропорту «Київ»
            <br />
            <small className="covid-info__link-text-small">Для всіх охочих 24/7</small>
          </span>
        </a>
      </div>
    </div>
  );
};

export default CovidInfo;
