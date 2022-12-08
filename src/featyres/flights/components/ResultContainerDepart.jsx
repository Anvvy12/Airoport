import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import ResultTable from '../../table/components/ResultTable';
import '../styles/flights-container.scss';
import { Link } from 'react-router-dom';

const ResultContainerDepart = () => {
  return (
    <div className="flights-container">
      <div className="flights-nav-site">
        <ul className="flights-sortList">
          <li className="flights-sortList__item actual left-side">
            <Link to="/" className="flights-actual">
              <div className="sort-button">
                <FontAwesomeIcon icon={faPlaneDeparture} />
                ВИЛІТ
              </div>
            </Link>
          </li>
          <li className="flights-sortList__item secondary right-side">
            <Link to="/arrival" className="flights-secondary">
              <div className="sort-button">
                <FontAwesomeIcon icon={faPlaneArrival} />
                ПРИЛІТ
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <ResultTable />
    </div>
  );
};

export default ResultContainerDepart;
