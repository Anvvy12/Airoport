import { fetchFlights } from '../../flights.gateway';

export const FLIGHTS_BY_VALUE = 'SEARTCH/FLIGHTS_BY_VALUE';

export const getSerachingFlights = departure => {
  return {
    type: FLIGHTS_BY_VALUE,
    payload: {
      departure,
    },
  };
};

export const fetchSearchingFlights = searchInfo => {
  return function (dispatch) {
    fetchFlights(searchInfo).then(flights => dispatch(getSerachingFlights(flights.body.departure)));
  };
};
