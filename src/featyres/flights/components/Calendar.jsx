import React, { useRef } from 'react';
import '../styles/calendar.scss';

const Calendar = ({ currentDay, setFlyDay, dispatch }) => {
  return (
    <>
      <input className="date__input" type="date" id="date" name="date" />
      <div className="date__setter date__setter_calendar">
        <div className="date__output date__output_calendar"></div>
        <div className="date__btn">
          <div className="date__btn_img"></div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
