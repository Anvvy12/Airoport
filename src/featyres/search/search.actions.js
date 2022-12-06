import { fetchFlights } from '../../flights.gateway';

export const FLIGHTS_BY_VALUE = 'SEARTCH/FLIGHTS_BY_VALUE';

export const getSerachingFlights = (flights, searchInfo) => {
  return {
    type: FLIGHTS_BY_VALUE,
    payload: {
      searchInfo,
      actualFlights: flights.filter(
        flight => flight.fltNo == searchInfo || flight['airportToID.name'] == searchInfo,
      ),
    },
  };
};

export const fetchSearchingFlights = searchInfo => {
  return function (dispatch) {
    fetchFlights().then(flights =>
      dispatch(getSerachingFlights(flights.body.departure, searchInfo)),
    );
  };
};
