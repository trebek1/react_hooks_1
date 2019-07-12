import { useState, useEffect } from "react";

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        console.log("joke json ", json);
        setResult(json);
      });
  }, []);
  return result;
};
// use an object instead of passing parameters then it doesn't matter the order you pass them in as
export const useDynamicTransition = ({ increment, delay, length }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(storedIndex => (storedIndex + increment) % length);
    }, delay);
    return () => clearInterval(interval);
  }, [delay, increment]);

  return index;
};
