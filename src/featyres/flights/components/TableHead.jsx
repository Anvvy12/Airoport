import React from 'react';
import '../styles/table-row.scss';

const TableHead = () => {
  return (
    <tr className="table-row">
      <td className="table-down" scope="col">
        термінал
      </td>
      <td className="table-down" scope="col">
        розклад
      </td>
      <td className="table-down" scope="col">
        напрямок
      </td>
      <td className="table-down" scope="col">
        статус
      </td>
      <td className="table-down" scope="col">
        авіакомпанія
      </td>
      <td className="table-down" scope="col">
        рейс
      </td>
      <td className="table-down" scope="col"></td>
    </tr>
  );
};

export default TableHead;
