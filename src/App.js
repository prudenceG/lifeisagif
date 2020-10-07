import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import  { fetchGifs }  from './store/actions/fetchGifs';
import GifsList from "./components/gifList/GifList";

const App = () => {
  const dispatch = useDispatch();
  const gifs = useSelector(state => state.gifs);
  const [searchValue, setSearchValue] = useState('Hello');
  const [number, setNumber] = useState(200);

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
      <form className="formulaire" onSubmit={e => handleSubmitSearchForm(e)}>
        <input
          type="text"
          placeholder="votre mot-clef"
          onChange={handleChangeSearchValue}
        />
        <button>Rechercher</button>
      </form>

      <GifsList gifs={gifs.results} />
      <GifsList gifs={[]} />

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
