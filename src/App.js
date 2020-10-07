import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import  { fetchGifs }  from './store/actions/fetchGifs';
import GifsList from "./components/gifList/GifList";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

const App = () => {
  const dispatch = useDispatch();
  const gifs = useSelector(state => state.gifs);
  const [searchValue, setSearchValue] = useState('Hello');
  const [number, setNumber] = useState(50);

  useEffect(() => {
    fetchGifs(searchValue, number, dispatch);
  }, [])

  const handleSubmitSearchForm = (e) => {
    e.preventDefault();
    fetchGifs(searchValue, number, dispatch);
  };

  const handleChangeSearchValue = e => {
    setSearchValue(e.target.value);
  };
  
  return (
    <div>
      <h1>Life is a GIF(t)</h1>
      <form className="form-container" onSubmit={e => handleSubmitSearchForm(e)}>
        <TextField className="search-textfield" id="outlined-basic" type="text" label="Une envie de GIF ?" variant="outlined" onChange={handleChangeSearchValue} />
        <Fab color="primary" aria-label="add" type="submit">
          <SearchRoundedIcon fontSize="large" />
        </Fab>
      </form>

      <GifsList gifs={gifs} />

      {/* <Mood
        angry={this.state.angry}
        happy={this.state.happy}
        moreGif={this.getMoreGif}
        getdataFeel={this.getDataFeel}
        data={this.state.dataGifFeel}
        next={this.state.next}
        previous={this.state.previous}
        click={this.state.click}
      /> */}
    </div>
  );
}

export default App;
