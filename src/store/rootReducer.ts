import { combineReducers } from 'redux';
import { countReducer } from '../pages/TestPage/reducer';

const rootReducer = combineReducers({
    countReducer,
});
export default rootReducer;
// gloabl
