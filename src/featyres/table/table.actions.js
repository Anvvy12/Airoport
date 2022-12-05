import { fetchFlights } from '../../flights.gateway';

export const FILL_TABLE_START_FLIGHTS = 'TABLE/FILL_TABLE_START_FLIGHTS';

export const fillStartFlights = departure => {
  return {
    type: FILL_TABLE_START_FLIGHTS,
    payload: {
      departure,
    },
  };
};

export const fetchStartFlights = () => {
  return function (dispatch) {
    fetchFlights().then(flights => dispatch(fillStartFlights(flights.body.departure)));
  };
};
