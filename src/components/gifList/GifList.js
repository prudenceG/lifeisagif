import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useEffect, memo } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { usePagination } from './../../services/usePagination';
import Gif from '../gif/gif';
import './giflist.css'
import Pagination from '../pagination/Pagination';

const styles = makeStyles({
  circularProgress: {
    color: 'white'
  }
})

const GifsList = (props) => {
  const {results, loading } = props.gifs;
  const arrayLength = results.length;
  const classes = styles();
  const intervall = 8;
  const paginationHook = usePagination(arrayLength, intervall);

  const [
    previous,
    next,
    setNext,
    setPrevious,
  ] = paginationHook;

  useEffect(() => {
    setPrevious(0);
    setNext(intervall);
  }, [results]);

  const slicedGifArray = (array, previous, next) => {
    if (!array.length) {
      return (
        <p>Il n'y a pas de résultats pour cette recherche, essaye autre chose ;)</p>
      );
    }
    
    return (
      <div className="gif-results">
        {array
          .slice(previous, next)
          .map(gif => (
            <Gif gif={gif} key={gif.images.fixed_height.url}/>
          ))
        }
      </div>
    );
  }

  const renderCircularProgress = () => {
    return (
      <div className="circular-progress-container">
        <CircularProgress className={classes.circularProgress}/> 
      </div>
    );
  }

  return (
    <div className="gifs-list-container">
      <div className="gif-results-container">
      {loading
        ? renderCircularProgress()
        : slicedGifArray(results, previous, next)
      }
      </div>

      <Pagination paginationHook={paginationHook} />
    </div>
  );
}

export default memo(GifsList);