import { createStore, combineReducers } from 'redux';

import {ReducerApp} from './reducerApp';

export const configureStore = () => {
        const store = createStore(
            ReducerApp
            // combineReducers({
            //     ReducerApp: ReducerApp
            // })
        );
        return store
};