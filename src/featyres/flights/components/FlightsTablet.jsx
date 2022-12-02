import React from 'react';
import FlightsTabletRow from './FlightsTabletRow';
import DataContainer from './DataContainer';
import '../styles/result-container.scss';

const FlightsTablet = () => {
  return (
    <div className="result-container">
      <div className="tablet-container">
        <DataContainer />

        <div className="result-tablet">
          <table className="table">
            <thead className="table-head">
              <tr>
                <td>sssssssss</td>
              </tr>
            </thead>
            <FlightsTabletRow />
          </table>
        </div>
      </div>
    </div>
  );
};

export default FlightsTablet;
