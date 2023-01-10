import { FLIGHTS_VALUE } from './search.actions';

const initialState = { searchInfo: '' };

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
