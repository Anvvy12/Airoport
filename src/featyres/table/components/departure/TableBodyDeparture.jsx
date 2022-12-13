import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TableRowDeparture from './TableRowDeparture';
import * as tableSelectors from '../../table.selectors';

const TableBodyDeparture = ({ departure, searchingValue }) => {
  const currentFlights = departure.filter(
    flight =>
      flight['airportToID.city'].toUpperCase().includes(searchingValue.toUpperCase()) ||
      String(flight['carrierID.IATA'] + flight.fltNo)
        .toUpperCase()
        .includes(searchingValue.toUpperCase()),
  );

  return (
    <tbody className="table-body">
      {currentFlights.map(flight => (
        <TableRowDeparture
          term={flight.term}
          key={flight.ID}
          logo={flight.airline.en.logoSmallName}
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
    searchingValue: state.searching.searchInfo,
  };
};

export default connect(mapState, null)(TableBodyDeparture);
