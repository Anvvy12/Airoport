import React from 'react';
import { toLocaleFormat } from '../../../helper/helper';
import '../styles/calendar.scss';

const Calendar = ({ handleCalendarDate }) => {
  const handlInput = event => {
    handleCalendarDate(toLocaleFormat('%D-%M-%Y', event.target.value));
  };

  return (
    <>
      <input className="date__input" type="date" id="date" name="date" onInput={handlInput} />
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
