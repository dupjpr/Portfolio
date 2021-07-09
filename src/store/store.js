import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';


const initialState = {
  hello: 'Hello World',
  loading: false,
  userData: { name: 'unknown' },
  rgbChallenge: { status: true, notification:'' },
  result: 0
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
