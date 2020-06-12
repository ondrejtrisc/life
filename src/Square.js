import React from 'react';
import './Square.css';

const Square = ({ color, changeColor, i, j }) => {

  // const [color, setColor] = useState(initialColor);

  // const handleClick = () => {
  //   setColor(color => {
  //     if (color === 'black') {
  //       return 'white';
  //     }
  //     return 'black';
  //   });
  // };

  return (
    <div className={"square " + color} onClick={() => changeColor(i, j)}>
    </div>
  );
};

export default Square;