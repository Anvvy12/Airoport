import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TableRow from './TableRowDeparture';
import * as tableSelectors from '../../table.selectors';

const TableBodyDeparture = ({ departure, searcheDeparture }) => {
  const currentFlights = Object.keys(searcheDeparture).length === 0 ? departure : searcheDeparture;

  return (
    <tbody className="table-body">
      {currentFlights.map(flight => (
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
    departure: tableSelectors.departureSelector(state),
    searcheDeparture: tableSelectors.searchDepartureSelector(state),
  };
};

export default connect(mapState, null)(TableBodyDeparture);
