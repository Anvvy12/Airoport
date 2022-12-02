import React from 'react';
import ResultTable from '../../table/components/ResultTable';
import '../styles/flights-container.scss';

const ResultContainer = () => {
  return (
    <div className="flights-container">
      <div className="flights-nav-site">
        <ul className="flights-sortList">
          <li className="flights-sortList__item actual left-side">ВИЛІТ</li>
          <li className="flights-sortList__item secondary right-side">ПРИЛІТ</li>
        </ul>
      </div>
      <ResultTable />
    </div>
  );
};

export default ResultContainer;
