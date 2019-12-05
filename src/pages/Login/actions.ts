import { LOGIN, LOGINOUT } from './constants';
import { actionTypes } from '../../types';

type LOGIN_ACTION = actionTypes;
type LOGIN_OUT_ACTION = Omit<actionTypes, 'payload'>;

export const Login = (params: object): LOGIN_ACTION => ({
    type: LOGIN,
    payload: { ...params },
});

export const LoginOut = (): LOGIN_OUT_ACTION => ({
    type: LOGINOUT,
});

export type LOGIN_ACTIONS = LOGIN_ACTION | LOGIN_OUT_ACTION;
