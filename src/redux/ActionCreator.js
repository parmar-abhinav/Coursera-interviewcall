import * as ActionTypes from './ActionTypes';

export const UPDATE_APP = (username, type) => ({
    type: ActionTypes.UPDATE_APP,
    payload: {
        username: username,
        type: type
    }
});