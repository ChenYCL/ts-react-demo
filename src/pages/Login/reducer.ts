import { LOGINOUT, LOGIN } from './constants';
import { LOGIN_ACTIONS } from './actions';
import * as _ from 'lodash';

type AuthType = boolean;

export interface stateType {
    Authorized: AuthType;
}
let initialState: stateType = {
    Authorized: true,
};

export const LoginReducer = (state = initialState, action: LOGIN_ACTIONS): stateType => {
    switch (action.type) {
        case LOGIN:
            return _.merge(state, { Authorized: true });
        case LOGINOUT:
            return _.merge(state, { Authorized: false });
        default:
            return state;
    }
};
