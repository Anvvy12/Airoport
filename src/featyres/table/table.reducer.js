import { FILL_TABLE_START_FLIGHTS } from './table.actions';

const initialState = { departure: [], arrival: [] };

const flightsReducer = (state = initialState, action) => {
  // console.log(action.payload.departure);
  // console.log(action.payload.arival);
  switch (action.type) {
    case FILL_TABLE_START_FLIGHTS:
      return {
        ...state,
        departure: action.payload.departure,
        arrival: action.payload.arrival,
      };
    default:
      return state;
  }
};

export default flightsReducer;
