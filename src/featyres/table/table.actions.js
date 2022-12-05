import * as gateWay from '../../flights.gateway';

export const FILL_TABLE_START_FLIGHTS = 'TABLE/FILL_TABLE_START_FLIGHTS';

const fillStartFlights = flights => {
  return {
    type: FILL_TABLE_START_FLIGHTS,
    payload: {
      flights,
    },
  };
};

export const fetchStartFlights = () => {
  return function (dispatch) {
    gateWay.fetchFlights().then(flights => fillStartFlights(flights));
  };
};
