import { createBrowserHistory, createHashHistory } from 'history';
import { BASE_NAME } from './proxy';
import { isDev } from '../utils/isDev';

export const history = isDev ? createBrowserHistory : createHashHistory;

export default BASE_NAME;
