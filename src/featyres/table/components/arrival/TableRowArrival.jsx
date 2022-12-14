import React from 'react';

const TableRowArrival = ({ term, logo, cityfrom, num, companyName, timeCalc, timeFact }) => {
  const timeDepartureFakt = timeFact.substring(12, 16);
  const timeDepartureCalc = timeCalc.substring(12, 16);

  const classTerm = term == 'A' ? 'table-down__termA' : 'table-down__termB';
  return (
    <tr className="table-row flights">
      <th className="table-down term">
        <span className={classTerm}>{term}</span>
      </th>
      <th className="table-down">{timeDepartureCalc}</th>
      <td className="table-down city">{cityfrom}</td>
      <th className="table-down">Вилетів o {timeDepartureFakt}</th>
      <th className="table-down">
        <ul className="company-list">
          <li className="company-list__item">
            <div data-v-7746f986="" class="flights-logo-container">
              <img src={logo} className="company-list__item-logo" alt="logo" />

              <span data-v-7746f986="">{companyName}</span>
            </div>
          </li>
        </ul>
      </th>
      <th className="table-down">{num}</th>
      <td className="table-down ditals">
        <a className="ditals__text">Деталі рейсу</a>
      </td>
    </tr>
  );
};

export default TableRowArrival;
