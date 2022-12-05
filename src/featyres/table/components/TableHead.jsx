import React from 'react';

const TableHead = () => {
  return (
    <thead className="table-head">
      <tr className="table-head-row">
        <th className="table-down" scope="col">
          Термінал
        </th>
        <th className="table-down" scope="col">
          Розклад
        </th>
        <td className="table-down" scope="col">
          Напрямок
        </td>
        <th className="table-down" scope="col">
          Статус
        </th>
        <th className="table-down" scope="col">
          Авіакомпанія
        </th>
        <th className="table-down" scope="col">
          Рейс
        </th>
        <td className="table-down" scope="col">
          Деталі рейсу
        </td>
      </tr>
    </thead>
  );
};

export default TableHead;
