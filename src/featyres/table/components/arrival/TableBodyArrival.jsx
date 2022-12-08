import React from 'react';
import { connect } from 'react-redux';
import TableRow from '../departure/TableRowDeparture';
import * as selectors from '../../../main/main.selectors';

const TableBodyArrival = ({ arrival }) => {
  // const currentFlights = arrival.splice(0, 23);

  return (
    <tbody className="table-body">
      {arrival.map(flight => (
        <TableRow
          term={flight.term}
          key={flight.ID}
          logo={flight.logo}
          cityTo={flight['airportToID.city']}
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
