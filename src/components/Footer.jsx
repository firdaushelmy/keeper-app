import React from 'react';

function Footer() {
  const getYear = new Date().getFullYear()
  return (
    <p>
      Copyright ⓒ
      {' '}
      {getYear}
    </p>
  )
};

export default Footer