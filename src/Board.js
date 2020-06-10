import React from 'react';
import './Board.css';
import Square from './Square.js'

function Board() {



  return (
    <div id="board" className="board">
      <Square />
      <Square />
      <Square initialColor="black" />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

export default Board;