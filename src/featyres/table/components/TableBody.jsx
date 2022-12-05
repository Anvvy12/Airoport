import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import * as flightsActions from '../table.actions.js';
import * as selectors from '../table.selectors';

const TableBody = ({ getFlights, flights }) => {
  useEffect(() => {
    getFlights();
  }, []);
  return (
    <tbody className="table-body">
      {flights.map(flights => (
        <TableRow
          term={flights.term}
          key={flights.ID}
          logo={flights.logo}
          cityTo={flights['airportToID.city']}
          num={String(flights['carrierID.IATA'] + flights.fltNo)}
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
