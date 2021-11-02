import React from 'react';

function Head({title, description}) {

  React.useEffect(() => {
    document.title = title ? "Ranek | " + title : "Ranek";
    document.querySelector('meta[name="description"]').setAttribute('content', description);
  }, []);

  return (<></>);
}

export default Head