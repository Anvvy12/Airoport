import React from 'react';

const FlightstableRow = ({ term, logo, cityTo, num, companyName, timeCalc, timeFact }) => {
  const timeDepartureFakt = timeFact ? timeFact.substring(12, 16) : '00:00';
  const timeDepartureCalc = timeCalc ? timeCalc.substring(12, 16) : '00:00';

  const classTerm = term == 'A' ? 'table-down__termA' : 'table-down__termB';
  return (
    <tr className="table-row flights">
      <th className="table-down term" scope="col">
        <span className={classTerm}>{term}</span>
      </th>
      <th className="table-down" scope="col">
        {timeDepartureCalc}
      </th>
      <td className="table-down" scope="col">
        {cityTo}
      </td>
      <th className="table-down" scope="col">
        Вилетів o {timeDepartureFakt}
      </th>
      <th className="table-down" scope="col">
        <ul className="company-list">
          <li className="company-list__item">
            <div data-v-7746f986="" class="flights-logo-container">
              <img src={logo} className="company-list__item-logo" alt="logo" />
            </div>
            <p data-v-7746f986="">{companyName}</p>
          </li>
        </ul>
      </th>
      <th className="table-down" scope="col">
        {num}
      </th>
      <td className="table-down ditals" scope="col">
        <a className="ditals__text">Деталі рейсу</a>
      </td>
    </tr>
  );
};

export default FlightstableRow;
