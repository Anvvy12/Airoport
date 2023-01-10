import React from 'react';
import { connect } from 'react-redux';
import Calendar from './Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import * as flightsActions from '../../main/main.actions';
import '../styles/data-container.scss';

const DataContainer = ({ getFlights }) => {
  let dateDay = new Date().getDate();
  let dateMonth = new Date().getMonth();
  const preventDay = `${dateDay - 1}/${dateMonth + 1}`;
  const actualDay = `${dateDay}/${dateMonth + 1}`;
  const nextDay = `${dateDay + 1}/${dateMonth + 1}`;

  const handleCalendarDate = calendarDate => {
    getFlights(calendarDate);
  };

  const handleDate = event => {
    const elementSentDate = event.currentTarget.firstElementChild.innerHTML
      .replace('/', '-')
      .concat(`-${new Date().getFullYear()}`);

    getFlights(elementSentDate);
  };

  return (
    <div className="calendar-date-wrapper">
      <div className="calendar-container ">
        <Calendar handleCalendarDate={handleCalendarDate} />
      </div>
      <div className="dates-container">
        <div className={`date esterday`} onClick={handleDate}>
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
const mapDispatch = {
  getFlights: flightsActions.fetchStartFlights,
};

export default connect(null, mapDispatch)(DataContainer);
