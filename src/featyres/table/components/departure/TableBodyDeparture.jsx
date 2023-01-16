import React from 'react';
import { connect } from 'react-redux';
import TableRowDeparture from './TableRowDeparture';
import * as tableSelectors from '../../table.selectors';
import NotFound from '../NotFound';

const TableBodyDeparture = ({ departure, searchingValue }) => {
  const upperSearchingValue = searchingValue.toUpperCase();

  const currentFlights = departure.filter(
    flight =>
      flight['airportToID.city'].toUpperCase().includes(upperSearchingValue) ||
      String(flight['carrierID.IATA'] + flight.fltNo)
        .toUpperCase()
        .includes(upperSearchingValue) ||
      flight.airline.en.name.toUpperCase().includes(upperSearchingValue) ||
      flight.airline.en.icao.toUpperCase().includes(upperSearchingValue),
  );

  if (currentFlights.length === 0) {
    return <NotFound />;
  }

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
    searchingValue: tableSelectors.searchingValueSelector(state),
  };
};

export default connect(mapState, null)(TableBodyDeparture);
