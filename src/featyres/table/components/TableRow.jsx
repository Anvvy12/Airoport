import React from 'react';

const FlightstableRow = () => {
  return (
    <tr className="table-row flights">
      <th className="table-down" scope="col">
        A
      </th>
      <th className="table-down" scope="col">
        5:40
      </th>
      <td className="table-down" scope="col">
        Варшава
      </td>
      <th className="table-down" scope="col">
        Вилетів о 6:19
      </th>
      <th className="table-down" scope="col">
        Логотип ЛОТ
      </th>
      <th className="table-down" scope="col">
        Рейс
      </th>
      <td className="table-down" scope="col">
        Деталі рейсу
      </td>
    </tr>
  );
};

export default FlightstableRow;
