import { ADD, CounterActionTypes, countType, REDUCE } from './types';

// reducer拿到类型 并定义初始值
const initialState: countType = 1;

export function sagaAsyncCount(state: countType = initialState, action: CounterActionTypes): countType {
    switch (action.type) {
        case ADD:
            return state + 1;
        case REDUCE:
            return state - 1;
        default:
            return state;
    }
}
