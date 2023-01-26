import React, { useState } from 'react';
import { connect } from 'react-redux';
import Calendar from './Calendar';
import * as flightsActions from '../../main/main.actions';
import '../styles/data-container.scss';

const DataContainer = ({ getFlights }) => {
  let dateDay = new Date().getDate();
  let dateMonth = new Date().getMonth();

  const handleDate = event => {
    const actualDate = `${event.currentTarget.firstElementChild.innerHTML}-${String(
      new Date().getFullYear(),
    )}`.replace('/', '-');
    getFlights(actualDate);
  };

  return (
    <div className="calendar-date-wrapper">
      <div className="calendar-container ">
        <Calendar />
      </div>
      <div className="dates-container">
        <div className="date" onClick={handleDate}>
          <div className="data-num">{`${dateDay - 1 < 10 ? `0${dateDay - 1}` : dateDay - 1}/${
            dateMonth + 1 < 10 ? `0${dateMonth + 1}` : dateMonth + 1
          }`}</div>
          <div className="data-title">вчора</div>
        </div>
        <div className="date" onClick={handleDate}>
          <div className="data-num">{`${dateDay < 10 ? `0${dateDay}` : dateDay}/${
            dateMonth + 1 < 10 ? `0${dateMonth + 1}` : dateMonth + 1
          }`}</div>
          <div className="data-title">сьогодні</div>
        </div>
        <div className="date" onClick={handleDate}>
          <div className="data-num">{`${dateDay + 1 < 10 ? `0${dateDay + 1}` : dateDay + 1}/${
            dateMonth + 1 < 10 ? `0${dateMonth + 1}` : dateMonth + 1
          }`}</div>
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
