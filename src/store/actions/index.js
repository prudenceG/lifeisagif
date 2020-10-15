import { FETCH_STARTED, FETCH_SUCCEED, FETCH_FAILED } from "./types";

export const fetchStarted = () => {
  return {
    type: FETCH_STARTED
  };
};

export const fetchSucceed = data => {
  return {
    type: FETCH_SUCCEED,
    payload: data
  };
};

export const fetchFailed = err => {
  return {
    type: FETCH_FAILED,
    payload: err
  };
};