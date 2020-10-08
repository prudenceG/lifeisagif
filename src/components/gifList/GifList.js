import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import Fab from '@material-ui/core/Fab';
import { usePagination } from './../../hooks/usePagination';
import Gif from '../gif/gif';
import './giflist.css'

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

  const [
    previous,
    next,
    handleClickPreviousResults,
    handleClickNextResults,
    isNextButtonHidden,
    isPreviousButtonHidden,
    setNext,
    setPrevious,
  ] = usePagination(arrayLength, intervall);

  useEffect(() => {
    setPrevious(0);
    setNext(intervall);
  }, [results]);

  const sliceGifArray = (array, previous, next) => {
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
        : sliceGifArray(results, previous, next)
      }
      </div>

      <div className="pagination-container">
        <div className="button-container">
          {!isPreviousButtonHidden &&
            <Fab color="primary" aria-label="add" onClick={handleClickPreviousResults}>
              <ArrowBackIosOutlinedIcon />
            </Fab>
          }
        </div>
        <div className="numbering">{`${previous} - ${next}`}</div>
        <div className="button-container">
          {!isNextButtonHidden &&
            <Fab color="primary" aria-label="add" onClick={handleClickNextResults}>
              <ArrowForwardIosOutlinedIcon />
            </Fab>          
          }
        </div>
      </div>
    </div>
  );
}

export default GifsList;