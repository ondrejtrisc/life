import React from 'react';
import './Square.css';

const Square = ({ color, changeColor, i, j }) => {
  return (
    <div className={"square " + color} onClick={() => changeColor(i, j)}>
    </div>
  );
};

export default Square;