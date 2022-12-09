import { fetchFlights } from '../../flights.gateway';

export const FLIGHTS_BY_VALUE = 'SEARTCH/FLIGHTS_BY_VALUE';

export const getSerachingFlights = (departure, arival) => {
  return {
    type: FLIGHTS_BY_VALUE,
    payload: {
      departure,
      arival,
    },
  };
};
