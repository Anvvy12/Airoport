import { FILL_TABLE_START_FLIGHTS } from './table.actions';

const initialState = { flightsDeparture: [] };

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_TABLE_START_FLIGHTS:
      return {
        ...state,
        flightsDeparture: action.payload.departure,
      };
    default:
      return state;
  }
};

export default flightsReducer;
