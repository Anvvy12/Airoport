import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import * as flightsActions from '../../main/main.actions';
import { toLocaleFormat } from '../../../helper/helper';
import '../styles/calendar.scss';

const Calendar = ({ getFlights }) => {
  const handleChange = event => {
    getFlights(toLocaleFormat('%D-%M-%Y', event.target.value));
  };

  return (
    <>
      {/* <input className="date__input" type="date" id="date" name="date" onChange={handleChange} /> */}
      <div className="date__setter date__setter_calendar">
        <div className="date__output date__output_calendar"></div>
        <div className="date__btn">
          <div className="date__btn_img">
            <input
              className="date__input"
              type="date"
              id="date"
              name="date"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatch = {
  getFlights: flightsActions.fetchStartFlights,
};

export default connect(null, mapDispatch)(Calendar);
