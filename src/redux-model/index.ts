import { combineReducers } from 'redux';
import { sagaAsyncCount } from './counter-saga/reducers';

export default combineReducers({
    sagaAsyncCount,
});
