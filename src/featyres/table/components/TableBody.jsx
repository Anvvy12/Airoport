import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import * as flightsActions from '../table.actions.js';
import * as selectors from '../table.selectors';

const TableBody = ({ getFlights, flights }) => {
  useEffect(() => {
    getFlights();
  }, []);
  const currentFlights = flights.splice(0, 23);
  return (
    <tbody className="table-body">
      {currentFlights.map(flights => (
        <TableRow
          term={flights.term}
          key={flights.ID}
          logo={flights.logo}
          cityTo={flights['airportToID.city']}
          num={String(flights['carrierID.IATA'] + flights.fltNo)}
          companyName={flights['carrierID.code']}
        />
      ))}
    </tbody>
  );
};

const mapDispatch = {
  getFlights: flightsActions.fetchStartFlights,
};

const mapState = state => {
  return {
    flights: selectors.flightsDepartureSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TableBody);
