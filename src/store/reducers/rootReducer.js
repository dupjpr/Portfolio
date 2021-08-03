import {
  LOADING,
  GET_PROFILE,
  ERROR
} from '../../utilities/constants';

const rootReducer = (state, action) => {

  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case GET_PROFILE:
      return {
        ...state,
        data: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    case 'CORRECT':
      return {
        ...state,
        rgbChallenge: { ...state.rgbChallenge, status: action.payload }
      }
    case 'NOTIFI':
      return {
        ...state,
        rgbChallenge: { ...state.rgbChallenge, notification: action.payload }
      }
    case 'SCORE':
      return {
        ...state,
        rgbChallenge: { ...state.rgbChallenge, score: state.rgbChallenge.score + action.payload }
      }
    default:
      return state
  }
}

export default rootReducer;
