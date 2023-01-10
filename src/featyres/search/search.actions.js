export const FLIGHTS_VALUE = 'SEARTCH/FLIGHTS_VALUE';
export const SEARCHED_FLIGHT = 'SEARTCH/SEARCHED_FLIGHT';

export const getSerachingValue = value => {
  return {
    type: FLIGHTS_VALUE,
    payload: {
      value,
    },
  };
};
