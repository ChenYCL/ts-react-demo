
export const ADD = 'ADD'
export const REDUCE = 'REDUCE'

export interface AddAction {
    type: typeof ADD
}

export interface ReduceAction {
    type:typeof REDUCE
}

export type countType = number;


export type CounterActionTypes = AddAction | ReduceAction


