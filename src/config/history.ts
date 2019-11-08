import {createBrowserHistory,createHashHistory} from 'history';
import {BASE_NAME} from './index'
import {isDev} from '../utils/isDev'


export const history = isDev ? createBrowserHistory : createHashHistory;

export default BASE_NAME;
