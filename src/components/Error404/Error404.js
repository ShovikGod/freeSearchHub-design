import React from 'react';
import './Error404.css';

function Error() {
  return (
      <div className='error d-flex mx-auto justify-content-center align-items-center'>
        <img alt="Error: 404" className='my-5 img-fluid' src='404.png' />
      </div>
  );
}

export default Error;
