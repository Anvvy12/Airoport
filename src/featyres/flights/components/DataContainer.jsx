import React from 'react';
import '../styles/data-container.scss';

const DataContainer = () => {
  return (
    <div className="calendar-date-wrapper">
      <div className="calendar-container ">
        <button className="calendar-button">cal img</button>
      </div>
      <div className="dates-container  ">
        <div className="date esterday">
          <div className="data-num">01/12</div>
          <div className="data-title">вчора</div>
        </div>
        <div className="date today">
          <div className="data-num">02/12</div>
          <div className="data-title">сьогодні</div>
        </div>
        <div className="date tommorow">
          <div className="data-num">03/12</div>
          <div className="data-title">завтра</div>
        </div>
      </div>
    </div>
  );
};

export default DataContainer;
