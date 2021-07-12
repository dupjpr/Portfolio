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
        rgbChallenge: { status: action.payload }
      }
    case 'NOTIFI':
      return {
        ...state,
        rgbChallenge: { ...state.rgbChallenge, notification: action.payload }
      }
    // case 'SCORE':
    //   return {
    //     ...state,
    //     rgbChallenge: { ...state.rgbChallenge, score: state.rgbChallenge.score + action.payload }
    //   }
    case 'SCORE':
      return {
        ...state,
        result: state.result + action.payload
      }
    case 'PLAYER-ONE':
      return {
        ...state,
        ticTac: { ...state.ticTac, tokenPlayerOne: action.payload }
      }
    case 'PLAYER-TWO':
      return {
        ...state,
        ticTac: { ...state.ticTac, tokenPlayerTwo: action.payload }
      }
    case 'TOKEN-VALID':
      return {
        ...state,
        ticTac: { ...state.ticTac, select: action.payload }
      }
    case 'DISPLAY':
      return {
        ...state,
        ticTac: { ...state.ticTac, display: action.payload }
      }
    case 'PLAYS':
      return {
        ...state,
        ticTac: { ...state.ticTac, plays: action.payload }
      }
    case 'TIMES':
      return {
        ...state,
        ticTac: { ...state.ticTac, times: state.ticTac.times + action.payload }
      }
    case 'CHECK':
      const { token, xvalue, yvalue } = action.payload;
      const matrix = state.ticTac.board;
      matrix[xvalue][yvalue] = token;
      return {
        ...state,
        ticTac: { ...state.ticTac, board: matrix }
      }
    case 'END':
      return {
        ...state,
        ticTac: { ...state.ticTac, times: action.payload }
      }
    default:
      return state
  }
}

export default rootReducer;
