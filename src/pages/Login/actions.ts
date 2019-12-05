import { LOGIN, LOGINOUT } from './constants';

type LOGIN_ACTION = actionTypes;
type LOGIN_OUT_ACTION = actionTypes;

export const Login = (params: object): LOGIN_ACTION => ({
    type: LOGIN,
    payload: { ...params },
});

export const LoginOut = (): LOGIN_OUT_ACTION => ({
    type: LOGINOUT,
});

export type LOGIN_ACTIONS = LOGIN_ACTION | LOGIN_OUT_ACTION;
