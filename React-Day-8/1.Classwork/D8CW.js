import React, { useState, useEffect } from 'react';

function D8CW() {
  const [message, setMessage] = useState('Hello dear one, learning React...?');

  useEffect(() => {
    console.log('use effect hook called');
    setTimeout(() => {
      setMessage('Great.... This is time to learn about HOOKS');
    }, 2000);
  }, []);

  return <div>{message}</div>;
}

export default D8CW;
