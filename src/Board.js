import React, { useState } from 'react';
import './Board.css';
import Square from './Square.js'

function Board() {

  const randomBoard = () => {
    let ret = [];
    for (let i = 0; i < 100; i++) {
      let line = [];
      for (let j = 0; j < 50; j++) {
        if (Math.random() < 0.5) {
          line.push('black');
        }
        else {
          line.push('white');
        }
      }
      ret.push(line);
    }
    return ret;
  };

  const [board, setBoard] = useState(randomBoard());

  let display = [];
  for (let i = 0; i < 100; i ++) {
    for (let j = 0; j < 50; j++) {
      display.push(<Square initialColor={board[i][j]} />)
    }
  }

  return (
    <div id="board" className="board">
      {display}
    </div>
  );
}

export default Board;