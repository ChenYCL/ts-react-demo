import { IRootState, initialType } from './reducer';

// CatList类型数据获取

export const CatListData = (state: IRootState): initialType => {
    return state.data;
};
