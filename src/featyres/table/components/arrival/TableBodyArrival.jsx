import React from 'react';
import { connect } from 'react-redux';
import TableRowArrival from './TableRowArrival';
import * as selectors from '../../../main/main.selectors';

const TableBodyArrival = ({ arrival }) => {
  // console.log(arrival.length);
  // if (arrival.length === 0) {
  //   return <NotFound />;
  // }

  return (
    <tbody className="table-body">
      {arrival.map(flight => (
        <TableRowArrival
          term={flight.term}
          key={flight.ID}
          logo={flight.logo}
          cityfrom={flight['airportFromID.city']}
          num={String(flight['carrierID.IATA'] + flight.fltNo)}
          companyName={flight['carrierID.code']}
          timeFact={flight.timeToStand}
          timeCalc={flight.timeLandCalc}
        />
      ))}
    </tbody>
  );
};

const mapState = state => {
  return {
    arrival: selectors.arivalSelector(state),
  };
};

export default connect(mapState, null)(TableBodyArrival);
