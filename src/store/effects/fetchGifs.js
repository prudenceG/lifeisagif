import axios from "axios";
import { fetchStarted, fetchSucceed, fetchFailed} from './../actions';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const fetchGifs = async (searchValue, numberGif, dispatch) => {
  dispatch(fetchStarted());

  try {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchValue}&limit=${numberGif}&offset=0&rating=G&lang=fr`
    );

    dispatch(fetchSucceed(response.data.data))

  } catch (err) {
    dispatch(fetchFailed(err))
  }
};