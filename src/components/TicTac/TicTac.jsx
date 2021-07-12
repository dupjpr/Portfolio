import { useDispatch, useSelector } from "react-redux";
import { setToken, displayHandle, cheking } from "./actionsTicTac.js";
import Board from "./Board.jsx";
import Players from "./Players.jsx";

import './ticTac.scss';

const TicTac = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClickToken = (token) => {

    if (storeData.ticTac.select) {
      if (token === 'X') {
        dispatch(setToken('X', 'O', !storeData.ticTac.select));
      } else {
        dispatch(setToken('O', 'X', !storeData.ticTac.select));
      }
    }


  };

  const handleReset = () => {
    dispatch(displayHandle('', true, 0));
    dispatch(setToken('', '', true));
    // dispatch(cheking([[0, 0, 0], [0, 0, 0], [0, 0, 0]]));

  }

  var winnerMessega = ' ';

  const gameCheck = () => {

    const { board } = storeData.ticTac;

    let check = true;

    if (
      board[0][0] === 'O' &&
      board[1][1] === 'O' &&
      board[2][2] === 'O'
    ) {
      check = false;
      winnerMessega = 'Winner O';
    } else if (
      board[0][0] === 'X' &&
      board[1][1] === 'X' &&
      board[2][2] === 'X'
    ) {
      check = false;
      winnerMessega = 'Winner X';
    }

    if (
      board[2][0] === 'O' &&
      board[1][1] === 'O' &&
      board[0][2] === 'O'
    ) {
      check = false;
      winnerMessega = 'Winner O';
    } else if (
      board[2][0] === 'X' &&
      board[1][1] === 'X' &&
      board[0][2] === 'X'
    ) {
      check = false;
      winnerMessega = 'Winner X';
    }

    if (
      board[0][0] === 'O' &&
      board[1][0] === 'O' &&
      board[2][0] === 'O'
    ) {
      check = false;
      winnerMessega = 'Winner O';
    } else if (
      board[0][0] === 'X' &&
      board[1][0] === 'X' &&
      board[2][0] === 'X'
    ) {
      check = false;
      winnerMessega = 'Winner X';
    }

    if (
      board[0][1] === 'O' &&
      board[1][1] === 'O' &&
      board[2][1] === 'O'
    ) {
      check = false;
      winnerMessega = 'Winner O';
    } else if (
      board[0][1] === 'X' &&
      board[1][1] === 'X' &&
      board[2][1] === 'X'
    ) {
      check = false;
      winnerMessega = 'Winner X';
    }

    if (
      board[0][2] === 'O' &&
      board[1][2] === 'O' &&
      board[2][2] === 'O'
    ) {
      check = false;
      winnerMessega = 'Winner O';
    } else if (
      board[0][2] === 'X' &&
      board[1][2] === 'X' &&
      board[2][2] === 'X'
    ) {
      check = false;
      winnerMessega = 'Winner X';
    }

    if (
      board[0][0] === 'O' &&
      board[0][1] === 'O' &&
      board[0][2] === 'O'
    ) {
      check = false;
      winnerMessega = 'Winner O';
    } else if (
      board[0][0] === 'X' &&
      board[0][1] === 'X' &&
      board[0][2] === 'X'
    ) {
      check = false;
      winnerMessega = 'Winner X';
    }

    if (
      board[1][0] === 'O' &&
      board[1][1] === 'O' &&
      board[1][2] === 'O'
    ) {
      check = false;
      winnerMessega = 'Winner O';
    } else if (
      board[1][0] === 'X' &&
      board[1][1] === 'X' &&
      board[1][2] === 'X'
    ) {
      check = false;
      winnerMessega = 'Winner X';
    }

    if (
      board[2][0] === 'O' &&
      board[2][1] === 'O' &&
      board[2][2] === 'O'
    ) {
      check = false;
      winnerMessega = 'Winner O';
    } else if (
      board[2][0] === 'X' &&
      board[2][1] === 'X' &&
      board[2][2] === 'X'
    ) {
      check = false;
      winnerMessega = 'Winner X';
    }
    return check
  };

  const checkGame = gameCheck();

  return (
    <main className='mainTicTac'>
      <h1>tic tac toe game</h1>
      <button
        onClick={() => handleReset()}
      >
        play again
      </button>
      <div className='mainTicTac-Token'>
        <p className='mainTicTac-Token-text'>select your token</p>
        <div className='mainTicTac-Token-figures'>
          <div
            className='mainTicTac-Token-X'
            onClick={() => handleClickToken('X')}
          >
            X
          </div>
          <div
            className='mainTicTac-Token-O'
            onClick={() => handleClickToken('O')}
          >
            O
          </div>
        </div>
      </div>
      <Players />
      <Board validation={checkGame} />
      <div>{winnerMessega}</div>
    </main>
  );
}

export default TicTac;