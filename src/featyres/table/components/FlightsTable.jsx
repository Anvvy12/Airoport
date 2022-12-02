import React from 'react';
import FlightsTableRow from './FlightsTableRow';
import DataContainer from '../../flights/components/DataContainer';
import TableHead from './TableHead';
import '../styles/result-container.scss';

const FlightsTable = () => {
  return (
    <div className="result-container">
      <div className="table-container">
        <DataContainer />
        <div className="result-table">
          <table className="table">
            <TableHead />
            <tbody>
              <FlightsTableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FlightsTable;
