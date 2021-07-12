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
    display: '',
    plays: true,
    times: 0,
    tokenPlayerOne: '',
    tokenPlayerTwo: '',
    board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    select: true
  },
  result: 0
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
