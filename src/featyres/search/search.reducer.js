import { FLIGHTS_BY_VALUE } from './search.actions';

const initialState = { searchInfo: 'LO756', searchArrival: {}, searchDeparture: {} };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_BY_VALUE:
      return {
        ...state,
        searching: {
          searchInfo: action.payload.searchInfo,
        },
      };
    default:
      return state;
  }
};

export default searchReducer;
