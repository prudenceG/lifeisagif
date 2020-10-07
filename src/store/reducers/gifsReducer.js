import { FETCH_STARTED, FETCH_SUCCEED, FETCH_FAILED } from "../actions/types";

const initialState = {
  loading: false,
  results: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_SUCCEED:
      return {
        ...state,
        results: action.payload,
        loading: false
      };
    case FETCH_FAILED:
      return {
        ...state,
        error: action.payload
      };
      default:
      return state
  }
};