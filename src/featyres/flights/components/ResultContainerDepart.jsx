import React from 'react';
import ResultTable from '../../table/components/ResultTable';
import '../styles/flights-container.scss';
import { Link } from 'react-router-dom';

const ResultContainerDepart = () => {
  return (
    <div className="flights-container">
      <div className="flights-nav-site">
        <ul className="flights-sortList">
          <li className="flights-sortList__item actual left-side">
            <Link to="/" className="arrival-actual">
              ВИЛІТ
            </Link>
          </li>
          <li className="flights-sortList__item secondary right-side">
            <Link to="/arrival" className="arrival-secondary">
              ПРИЛІТ
            </Link>
          </li>
        </ul>
      </div>
      <ResultTable />
    </div>
  );
};

export default ResultContainerDepart;
