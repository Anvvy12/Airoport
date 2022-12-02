import React from 'react';

const TableHead = () => {
  return (
    <thead className="table-head">
      <tr className="table-head-row">
        <th className="table-down" scope="col">
          термінал
        </th>
        <th className="table-down" scope="col">
          розклад
        </th>
        <td className="table-down" scope="col">
          напрямок
        </td>
        <th className="table-down" scope="col">
          статус
        </th>
        <th className="table-down" scope="col">
          авіакомпанія
        </th>
        <th className="table-down" scope="col">
          рейс
        </th>
        <td className="table-down" scope="col">
          Деталі рейсу
        </td>
      </tr>
    </thead>
  );
};

export default TableHead;
