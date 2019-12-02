import { IRootState, initialType } from './reducer';

// CatList类型

export const CatListData = (state: IRootState): initialType => {
    return state.data;
};
