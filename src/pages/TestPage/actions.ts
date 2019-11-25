import { Action } from 'redux';

import { ADD, REDUCE } from './constants';

export interface ADD_ACTION_TYPE extends Action {
    type: typeof ADD;
}

export interface REDUCE_ACTION_TYPE extends Action {
    type: typeof REDUCE;
}

// export type
export type countAction = ADD_ACTION_TYPE | REDUCE_ACTION_TYPE;

// add handler
export const addHandler = (): countAction => ({
    type: ADD,
});

// reduce handler
export const reduceHandler = (): countAction => ({
    type: REDUCE,
});
