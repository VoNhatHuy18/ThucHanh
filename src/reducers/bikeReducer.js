import { FETCH_BIKES_REQUEST, FETCH_BIKES_SUCCESS, FETCH_BIKES_FAILURE } from '../actions/bikeActions';

const initialState = {
  loading: false,
  bikes: [],
  error: null,
};

export const bikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BIKES_REQUEST:
      return { ...state, loading: true };
    case FETCH_BIKES_SUCCESS:
      return { ...state, loading: false, bikes: action.payload };
    case FETCH_BIKES_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};