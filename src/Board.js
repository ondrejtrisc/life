import React, { useState } from 'react';
import { Button } from 'reactstrap';
import './Board.css';
import Square from './Square.js'

function Board() {

  const width = 100;
  const height = 50;

  const randomBoard = () => {
    let ret = [];
    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        if (Math.random() < 0.5) {
          row.push('black');
        }
        else {
          row.push('white');
        }
      }
      ret.push(row);
    }
    return ret;
  };

  const [board, setBoard] = useState(randomBoard());
  const [timer, setTimer] = useState(null);

  const step = () => {
    setBoard(board => {

      const countLiveNeighbours = (i, j) => {
        let ret = 0;

        //up
        if (i === 0) {
          if (board[height - 1][j] === 'black') {
            ret++;
          }
        }
        else {
          if (board[i - 1][j] === 'black') {
            ret++;
          }
        }

        //up right
        if (i === 0) {
          if (j === width - 1) {
            if (board[height - 1][0] === 'black') {
              ret++;
            }
          }
          else {
            if (board[height - 1][j + 1] === 'black') {
              ret++;
            }
          }
        }
        else {
          if (j === width - 1) {
            if (board[i - 1][0] === 'black') {
              ret++;
            }
          }
          else {
            if (board[i - 1][j + 1] === 'black') {
              ret++;
            }
          }
        }

        //right
        if (j === width - 1) {
          if (board[i][0] === 'black') {
            ret++;
          }
        }
        else {
          if (board[i][j + 1] === 'black') {
            ret++;
          }
        }

        //down right
        if (i === height - 1) {
          if (j === width - 1) {
            if (board[0][0] === 'black') {
              ret++;
            }
          }
          else {
            if (board[0][j + 1] === 'black') {
              ret++;
            }
          }
        }
        else {
          if (j === width - 1) {
            if (board[i + 1][0] === 'black') {
              ret++;
            }
          }
          else {
            if (board[i + 1][j + 1] === 'black') {
              ret++;
            }
          }
        }

        //down
        if (i === height - 1) {
          if (board[0][j] === 'black') {
            ret++;
          }
        }
        else {
          if (board[i + 1][j] === 'black') {
            ret++;
          }
        }

        //down left
        if (i === height - 1) {
          if (j === 0) {
            if (board[0][width - 1] === 'black') {
              ret++;
            }
          }
          else {
            if (board[0][j - 1] === 'black') {
              ret++;
            }
          }
        }
        else {
          if (j === 0) {
            if (board[i + 1][width - 1] === 'black') {
              ret++;
            }
          }
          else {
            if (board[i + 1][j - 1] === 'black') {
              ret++;
            }
          }
        }

        //left
        if (j === 0) {
          if (board[i][width - 1] === 'black') {
            ret++;
          }
        }
        else {
          if (board[i][j - 1] === 'black') {
            ret++;
          }
        }

        //up left
        if (i === 0) {
          if (j === 0) {
            if (board[height - 1][width - 1] === 'black') {
              ret++;
            }
          }
          else {
            if (board[height - 1][j - 1] === 'black') {
              ret++;
            }
          }
        }
        else {
          if (j === 0) {
            if (board[i - 1][width - 1] === 'black') {
              ret++;
            }
          }
          else {
            if (board[i - 1][j - 1] === 'black') {
              ret++;
            }
          }
        }

        return ret;
      };

      let ret = [];
      for (let i = 0; i < height; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
          const liveNeighbourCount = countLiveNeighbours(i, j);
          if (board[i][j] === 'black') {
            if (liveNeighbourCount >= 2 && liveNeighbourCount <= 3) {
              row.push('black');
            }
            else {
              row.push('white');
            }
          }
          else {
            if (liveNeighbourCount === 3) {
              row.push('black');
            }
            else {
              row.push('white');
            }
          }
        }
        ret.push(row);
      }
      return ret;
    });
  };

  const changeColor = (i, j) => {
    setBoard(board => {
      const ret = [];
      board.forEach(row => {ret.push([...row])});
      if (ret[i][j] === 'black') {
        ret[i][j] = 'white';
      }
      else {
        ret[i][j] = 'black';
      }
      return ret;
    });
  };

  const display = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      display.push(<Square color={board[i][j]} changeColor={changeColor} i={i} j={j} key={'row-' + i + '-column-' + j} />)
    }
  }

  const startStop = () => {
    if(timer === null) {
      setTimer(setInterval(step, 1000));
    }
    else {
      clearInterval(timer);
      setTimer(null);
    }
  }

  return (
    <>
      <div id="board" className="board">
        {display}
      </div>
      <div id="control" className="control">
        <Button color="primary" onClick={startStop}>{(timer === null) ? 'start' : 'stop' }</Button>
        <Button color="primary" onClick={step}>single step</Button>
        <Button color="primary" onClick={() => setBoard(randomBoard())}>random</Button>
      </div>
    </>
  );
}

export default Board;