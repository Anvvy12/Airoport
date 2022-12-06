import React from 'react';

const FlightstableRow = ({ term, logo, cityTo, num, companyName, timeDepFact }) => {
  const tieDeparture = timeDepFact.substring(12, 16);

  const classTerm = term == 'A' ? 'table-down__termA' : 'table-down__termB';
  return (
    <tr className="table-row flights">
      <th className="table-down term" scope="col">
        <span className={classTerm}>{term}</span>
      </th>
      <th className="table-down" scope="col">
        5:40
      </th>
      <td className="table-down" scope="col">
        {cityTo}
      </td>
      <th className="table-down" scope="col">
        Вилетів o {tieDeparture}
      </th>
      <th className="table-down" scope="col">
        <img src={logo} className="table-down__img" />
        <span>{companyName}</span>
      </th>
      <th className="table-down" scope="col">
        {num}
      </th>
      <td className="table-down ditals" scope="col">
        Деталі рейсу
      </td>
    </tr>
  );
};

export default FlightstableRow;
