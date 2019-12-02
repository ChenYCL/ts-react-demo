import { combineReducers } from 'redux';
import { countReducer } from '../pages/TestPage/reducer';
import { Songs } from '../pages/Songs/reducer';

const rootReducer = combineReducers({
    countReducer,
    Songs,
});
export default rootReducer;
// gloabl
