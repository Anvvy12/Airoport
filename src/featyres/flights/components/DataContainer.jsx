import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import '../styles/data-container.scss';

const DataContainer = () => {
  let dateDay = new Date().getDate();
  let dateMonth = new Date().getMonth();
  return (
    <div className="calendar-date-wrapper">
      <div className="calendar-container ">
        <input type="date" className="calendar-button" value="" />
      </div>
      <div className="dates-container  ">
        <div className="date esterday">
          <div className="data-num">{`${dateDay - 1}/${dateMonth + 1}`}</div>
          <div className="data-title">вчора</div>
        </div>
        <div className="date today">
          <div className="data-num">{`${dateDay}/${dateMonth + 1}`}</div>
          <div className="data-title">сьогодні</div>
        </div>
        <div className="date tommorow">
          <div className="data-num">{`${dateDay + 1}/${dateMonth + 1}`}</div>
          <div className="data-title">завтра</div>
        </div>
      </div>
    </div>
  );
};

export default DataContainer;
