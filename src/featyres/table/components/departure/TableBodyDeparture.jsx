import React from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRowDeparture';
import * as selectors from '../../../main/main.selectors';

const TableBodyDeparture = ({ departure }) => {
  // console.log(departure.length);

  // if (departure.length === 0) {
  //   return <NotFound />;
  // }

  return (
    <tbody className="table-body">
      {departure.map(flight => (
        <TableRow
          term={flight.term}
          key={flight.ID}
          logo={flight.logo}
          cityTo={flight['airportToID.city']}
          num={String(flight['carrierID.IATA'] + flight.fltNo)}
          companyName={flight['carrierID.code']}
          timeFact={flight.timeDepFact}
          timeCalc={flight.timeDepExpectCalc}
        />
      ))}
    </tbody>
  );
};

const mapState = state => {
  return {
    departure: selectors.departureSelector(state),
  };
};

export default connect(mapState, null)(TableBodyDeparture);
