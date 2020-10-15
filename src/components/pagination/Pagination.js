import React from 'react';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import Fab from '@material-ui/core/Fab';
import './pagination.css'

const Pagination = ({paginationHook}) => {
  const [
    previous,
    next,,,
    isPreviousButtonHidden,
    isNextButtonHidden,
    handleClickPreviousResults,
    handleClickNextResults,
  ] = paginationHook;
  
  return (
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
  );
}

export default Pagination;