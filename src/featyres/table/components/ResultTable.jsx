import React from 'react';
import DataContainer from '../../flights/components/DataContainer';
import Table from './Table';
import '../styles/result-container.scss';

const ResultTable = () => {
  return (
    <div className="result-container">
      <div className="table-container">
        <DataContainer />
        <div className="result-table">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
