const tokenPlayerOne = (data) => ({
  type: 'PLAYER-ONE',
  payload: data
});
const tokenPlayerTwo = (data) => ({
  type: 'PLAYER-TWO',
  payload: data
});
const tokenValidation = (data) => ({
  type: 'TOKEN-VALID',
  payload: data
});
const display = (data) => ({
  type: 'DISPLAY',
  payload: data
});
const plays = (data) => ({
  type: 'PLAYS',
  payload: data
});
const times = (data) => ({
  type: 'TIMES',
  payload: data
});
const check = (data) => ({
  type: 'CHECK',
  payload: data
});
const reset = (data) => ({
  type: 'RESET-BOARD',
  payload: data
});

const setToken = (playerOne, playerTwo, tokenCheck) => {
  return dispatch => {
    dispatch(tokenPlayerOne(playerOne));
    dispatch(tokenPlayerTwo(playerTwo));
    dispatch(tokenValidation(tokenCheck));
  }
}

const displayHandle = (token, playGame, num, trigger, square) => {
  return dispatch => {
    dispatch(display([token, square]));
    dispatch(plays(playGame));
    dispatch(times([num, trigger]));
  }
}

const cheking = (data) => {
  return dispatch => {
    dispatch(check(data));
  }
}

const resetBoard = (data) => {
  return dispatch => {
    dispatch(reset(data));
  }
}

export { setToken, displayHandle, cheking, resetBoard };