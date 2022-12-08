import { FILL_TABLE_START_FLIGHTS } from './main.actions';

const initialState = { departure: [], arrival: [] };

const mainReducer = (state = initialState, action) => {
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

export default mainReducer;
