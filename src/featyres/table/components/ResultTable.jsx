import React from 'react';
import DataContainer from '../../flights/components/DataContainer';
import TableHead from './TableHead';
import TableBody from './TableBody';
import '../styles/result-container.scss';

const ResultTable = () => {
  return (
    <div className="result-container">
      <div className="table-container">
        <DataContainer />
        <div className="result-table">
          <table className="table">
            <TableHead />
            <TableBody />
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
