import { combineReducers } from 'redux';
import { countReducer } from '../pages/TestPage/reducer';
import { Songs } from '../pages/Songs/reducer';
import { LoginReducer } from '../pages/Login/reducer';

const rootReducer = combineReducers({
    countReducer,
    Songs,
    LoginReducer,
});
export default rootReducer;

// gloabl
