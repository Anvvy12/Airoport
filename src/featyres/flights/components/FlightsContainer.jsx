import React from 'react';
import FlightsTable from '../../table/components/FlightsTable';
import '../styles/flights-container.scss';

const FlightsContainer = () => {
  return (
    <div className="flights-container">
      <div className="flights-nav-site">
        <ul className="flights-sortList">
          <li className="flights-sortList__item actual left-side">ВИЛІТ</li>
          <li className="flights-sortList__item secondary right-side">ПРИЛІТ</li>
        </ul>
      </div>
      <FlightsTable />
    </div>
  );
};

export default FlightsContainer;
