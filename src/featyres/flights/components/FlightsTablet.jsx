import React from 'react';
import FlightsTabletRow from './FlightsTabletRow';
import '../styles/tablet-container.scss';

const FlightsTablet = () => {
  return (
    <div className="result-container">
      <div className="tablet-container">
        <div className="data-container">Data Component</div>
        <div className="result-tablet">
          <table className="table">
            <thead>sssssssss</thead>
            <FlightsTabletRow />
          </table>
        </div>
      </div>
    </div>
  );
};

export default FlightsTablet;
