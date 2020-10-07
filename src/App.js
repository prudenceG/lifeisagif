import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchGifs } from './store/actions/fetchGifs';
import GifsList from "./components/gifList/GifList";

const mapStateToProps = state => ({
  gifs: state.gifs,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchGifs : (searchValue, numberGifs) => dispatch(fetchGifs(searchValue, numberGifs)),
  }
}

const App = props => {
  const [searchValue, setSearchValue] = useState('Hello');
  const [number, setNumber] = useState(200);
  const { gifs, fetchGifs } = props;

  useEffect(() => {
    fetchGifs(searchValue, number);
  }, [])

  const handleSubmitSearchForm = (e) => {
    e.preventDefault();
    fetchGifs(searchValue, number);
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
