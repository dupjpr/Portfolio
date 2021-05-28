import { createStore } from "redux";
import rootReducer from './reducers/index';

const initialState = {
  hello: 'Hello World',
  loading: false,
  userData: { name: 'unknown' }
}

const store = createStore(rootReducer, initialState);

export default store;