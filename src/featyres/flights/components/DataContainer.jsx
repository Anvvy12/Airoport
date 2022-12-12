import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import '../styles/data-container.scss';

const DataContainer = () => {
  let dateDay = new Date().getDate();
  let dateMonth = new Date().getMonth();
  const preventDay = `${dateDay - 1}/${dateMonth + 1}`;
  const actualDay = `${dateDay}/${dateMonth + 1}`;
  const nextDay = `${dateDay + 1}/${dateMonth + 1}`;

  const handleDate = event => {
    console.log(event.target.value);
    return null;
  };
  return (
    <div className="calendar-date-wrapper">
      <div className="calendar-container ">
        <input type="date" className="calendar-button" value="" />
      </div>
      <div className="dates-container">
        <div className="date esterday" value="s" onClick={handleDate}>
          <div className="data-num">{preventDay}</div>
          <div className="data-title">вчора</div>
        </div>
        <div className="date today" onClick={handleDate}>
          <div className="data-num">{actualDay}</div>
          <div className="data-title">сьогодні</div>
        </div>
        <div className="date tommorow" onClick={handleDate}>
          <div className="data-num">{nextDay}</div>
          <div className="data-title">завтра</div>
        </div>
      </div>
    </div>
  );
};

export default DataContainer;
