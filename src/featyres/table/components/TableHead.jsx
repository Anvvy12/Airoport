import React from 'react';

const TableHeadArrival = ({ text }) => {
  return (
    <thead className="table-head">
      <tr className="table-head-row ">
        <th className="table-down term" scope="col">
          Термінал
        </th>
        <th className="table-down timetable start" scope="col">
          Розклад
        </th>
        <td className="table-down ariv-dep start" scope="col">
          {text}
        </td>
        <th className="table-down status start" scope="col">
          Статус
        </th>
        <th className="table-down company start" scope="col">
          Авіакомпанія
        </th>
        <th className="table-down rais start" scope="col">
          Рейс
        </th>
        <td className="table-down start" scope="col"></td>
      </tr>
    </thead>
  );
};

export default TableHeadArrival;
