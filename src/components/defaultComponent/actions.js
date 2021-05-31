import { LOADING } from '../../utilities/constants';

const loading = (boolean = false) => ({
    type: LOADING,
    payload: boolean
})


const loadingAction = (boolean) => {
    return dispatch => {
        dispatch(loading(boolean));
        setTimeout(() => {
            dispatch(loading(!boolean));
            
        }, 1000);
    
    }        
}

export default loadingAction;