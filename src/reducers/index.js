import { combineReducers } from 'redux';
import counterReducer2 from './counterReducer2';
import welcomeReducer from './welcomeReducer';
import asyncReducer from './asyncReducer';
import loaderReducer from './loaderReducer';

export default combineReducers({
    counter: counterReducer2,
    welcome: welcomeReducer,
    todoData: asyncReducer,
    loaderReducer: loaderReducer,
})