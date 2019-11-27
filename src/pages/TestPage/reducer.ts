import { countAction } from './actions';

import { ADD, REDUCE } from './constants';

export type countType = number;
export const iniValue = 1;

export interface IRootState {
    count: countType;
}

export const countReducer = (state: countType = iniValue, action: countAction): countType => {
    switch (action.type) {
        case ADD:
            return state + 1;
        case REDUCE:
            return state - 1;
        default:
            return state;
    }
};
