import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Fragment } from 'react';
import { usePagination } from './../../hooks/usePagination';
import Gif from '../gif/gif';

const GifsList = (props) => {
  const arrayLength = props.gifs.length;
  const [
    previous,
    next,
    handleClickPreviousResults,
    handleClickNextResults,
    isNextButtonHidden,
    isPreviousButtonHidden,
  ] = usePagination(arrayLength, 10);

  const sliceGifArray = (array, previous, next) => {
    if (!array.length) {
      return (
        <p>Il n'y a pas de résultats pour cette recherche, essaye autre chose ;)</p>
      );
    }

    return (
      <Fragment>
        {array
          .slice(previous, next)
          .map(gif => (
            <Gif gif={gif} key={gif.images.fixed_height.url}/>
          ))
        }
      </Fragment>
    );
  }

  const renderCircularProgress = () => {
    return (
      <div className="circular-progress-container">
        <CircularProgress /> 
      </div>
    );
  }

  return (
    <div className="gifs-list-container">
      <div className="gifs-results-container">
        {props.gifs.loading
          ? renderCircularProgress()
          : sliceGifArray(props.gifs, previous, next)
        }
      </div>

      <div className="pagination-container">
        {!isPreviousButtonHidden && <button onClick={handleClickPreviousResults}>{'<'}</button>}
        <span>{`${previous} - ${next}`}</span>
        {!isNextButtonHidden && <button onClick={handleClickNextResults}>{'>'}</button>}
      </div>
    </div>
  );
}

export default GifsList;