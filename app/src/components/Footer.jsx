/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright ⓒ{getYear}</p>
    </footer>
  );
};

export default Footer;
