import { IRootState, countType } from './reducer';

// 获取到countReducer 中的count

export const selectcount = (state: IRootState): countType => {
    return state.count;
};
