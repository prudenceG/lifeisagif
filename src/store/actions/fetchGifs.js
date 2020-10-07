import { FETCH_STARTED, FETCH_SUCCEED, FETCH_FAILED } from "./types";
import axios from "axios";

const fetchStarted = () => {
  return {
    type: FETCH_STARTED
  };
};

const fetchSucceed = data => {
  return {
    type: FETCH_SUCCEED,
    payload: data
  };
};
const fetchFailed = err => {
  return {
    type: FETCH_FAILED,
    payload: err
  };
};

export const fetchGifs = async (searchValue, numberGif, dispatch) => {
  dispatch(fetchStarted());

  try {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=1JdcZTBUIBXD2kaE1z59aDzYXu2VtVGH&q=${searchValue}&limit=${numberGif}&offset=0&rating=G&lang=fr`
    );

    dispatch(fetchSucceed(response.data.data))

  } catch (err) {
    dispatch(fetchFailed(err))
  }
};
