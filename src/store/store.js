import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {
  hello: 'Hello World',
  loading: false,
  userData: { name: 'unknown' },
  rgbChallenge: {
    status: true,
    notification: '',
    score: 0
  },
  ticTac: {
    plays: true,
    times: 0,
    tokenPlayerOne: '',
    tokenPlayerTwo: '',
    board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    select: true,
    square1: ' ',
    square2: ' ',
    square3: ' ',
    square4: ' ',
    square5: ' ',
    square6: ' ',
    square7: ' ',
    square8: ' ',
    square9: ' ',
    check: true
  },
  result: 0
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
