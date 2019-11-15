import { ADD, REDUCE, AddAction, ReduceAction } from './types';

export function Add(): AddAction {
    return {
        type: ADD,
    };
}

export function Reduce(): ReduceAction {
    return {
        type: REDUCE,
    };
}
