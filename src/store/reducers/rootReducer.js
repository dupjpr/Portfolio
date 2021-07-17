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

      const [token, square] = action.payload;

      return {
        ...state,
        ticTac: { ...state.ticTac, [square]: token }
      }
    case 'PLAYS':
      return {
        ...state,
        ticTac: { ...state.ticTac, plays: action.payload }
      }
    case 'TIMES':

      let num = '';

      if (action.payload[1]) {
        num = state.ticTac.times + action.payload[0];
      } else {
        num = action.payload[0];
      }
      return {
        ...state,
        ticTac: { ...state.ticTac, times: num }
      }
    case 'CHECK':

      var matrix = '';

      if (Array.isArray(action.payload)) {
        matrix = action.payload
      } else {
        const { token, xvalue, yvalue } = action.payload;
        matrix = state.ticTac.board;
        matrix[xvalue][yvalue] = token;
      }

      return {
        ...state,
        ticTac: { ...state.ticTac, board: matrix }
      }
    case 'END':
      return {
        ...state,
        ticTac: { ...state.ticTac, times: action.payload }
      }
    case 'RESET-BOARD':
      return {
        ...state,
        ticTac: {
          ...state.ticTac,
          square1: action.payload,
          square2: action.payload,
          square3: action.payload,
          square4: action.payload,
          square5: action.payload,
          square6: action.payload,
          square7: action.payload,
          square8: action.payload,
          square9: action.payload
        }
      }
    default:
      return state
  }
}

export default rootReducer;
