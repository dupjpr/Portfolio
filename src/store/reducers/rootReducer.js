import { LOADING } from '../../utilities/constants';

const rootReducer = (state, action) => {

    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }

}

export default rootReducer;