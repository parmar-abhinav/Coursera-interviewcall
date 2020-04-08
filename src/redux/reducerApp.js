import * as ActionTypes from './ActionTypes';

export const initialstate = {
    username: '',
    type: 'None'
}

export const ReducerApp = (state = initialstate, action) => {
    switch(action.type){
        case ActionTypes.UPDATE_APP:
            var newState = action.payload
            console.log(newState)
            return newState
        default:
            return state;
    }
}