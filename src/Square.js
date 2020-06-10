import React, { useState } from 'react';
import './Square.css';

const Square = ({ initialColor }) => {

  const [color, setColor] = useState(initialColor);

  const handleClick = () => {
    setColor(color => {
      if (color === 'black') {
        return 'white';
      }
      return 'black';
    });
  };

  return (
    <div className={"square " + color} onClick={handleClick}>
    </div>
  );
};

export default Square;