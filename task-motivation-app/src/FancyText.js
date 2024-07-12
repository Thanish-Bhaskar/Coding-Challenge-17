
import React from 'react';
import './FancyText.css';

const FancyText = ({ title, text }) => {
  return (
    <div className={title ? 'title-text' : 'regular-text'}>
      {text}
    </div>
  );
};

export default FancyText;
