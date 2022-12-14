import React from 'react';
import '../styles/spinner.scss';

const Spinner = () => {
  return (
    <div class="loader">
      <div class="dot dot1"></div>
      <div class="dot dot2"></div>
      <div class="dot dot3"></div>
      <div class="dot dot4"></div>
    </div>
  );
};

export default Spinner;
