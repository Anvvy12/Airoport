import React from 'react';
import '../styles/tablet-row.scss';

const FlightsTabletRow = () => {
  return (
    <tr className="tablet-row">
      <td className="tablet-down">термінал</td>
      <td className="tablet-down">розклад</td>
      <td className="tablet-down">напрямок</td>
      <td className="tablet-down">статус</td>
      <td className="tablet-down">авіакомпанія</td>
      <td className="tablet-down">рейс</td>
      <td className="tablet-down"></td>
    </tr>
  );
};

export default FlightsTabletRow;
