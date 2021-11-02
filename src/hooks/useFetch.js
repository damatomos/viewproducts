import React from 'react';

function useFetch() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [load, setLoad] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoad(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (err) {
      console.log(err);
      setError(err.toString());
      json = null;
    } finally {
      setData(json);
      setLoad(false);
    }
    return {response, json};
  }, []);

  return {data, error, load, request};
}

export default useFetch;