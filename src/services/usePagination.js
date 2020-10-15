import { useState, useEffect } from 'react';

export const usePagination = (arrayLength, intervall) => {
  const nextValue = arrayLength >= intervall ? intervall : arrayLength;
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(nextValue);
  const [isPreviousButtonHidden, setIsPreviousButtonHidden] = useState(true);
  const [isNextButtonHidden, setIsNextButtonHidden] = useState(false);

  useEffect(() => {
    setNext(nextValue);
  }, [nextValue])

  const handleClickPreviousResults = () => {
    const previousValue = previous - intervall

    setPrevious(previousValue);
    setNext(previous);
    setIsPreviousButtonHidden(false)
    setIsNextButtonHidden(false)

    if (previousValue === 0) {
      setIsPreviousButtonHidden(true)
    }
  }
  
  const handleClickNextResults = () => {
    const isReminder =  arrayLength - next <= intervall;
    const nextValue = isReminder ? next + (arrayLength - next) : next + intervall

    setPrevious(next);
    setNext(nextValue);
    setIsPreviousButtonHidden(false)
    setIsNextButtonHidden(false)

    if (nextValue === arrayLength) {
      setIsNextButtonHidden(true)
    }
  }

  return [
    previous,
    next,
    setNext,
    setPrevious,
    isPreviousButtonHidden,
    isNextButtonHidden,
    handleClickPreviousResults,
    handleClickNextResults,
  ];
}