import { FLIGHTS_VALUE } from './search.actions';
import { SEARCHED_FLIGHT } from './search.actions';

const initialState = { searchInfo: '', searchArrival: {}, searchDeparture: {} };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_VALUE:
      return {
        ...state,
        searchInfo: action.payload.value,
      };
    default:
      return state;
  }
};

export default searchReducer;
