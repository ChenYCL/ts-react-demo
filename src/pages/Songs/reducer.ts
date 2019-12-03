import { songAction } from './actions';
import { merge } from 'lodash';

import { GET_MUSIC_CAT } from './constants';

export interface SubType {
    name: string;
    resourceCount: number;
    imgId: number;
    imgUrl: string | null;
    type: number;
    category: number;
    resourceType: number;
    hot: boolean;
    activity: boolean;
}

export interface CatList {
    all: any;
    sub: SubType[];
}

export type initialType = CatList | {};

export interface IRootState {
    data: CatList;
}

export const songsCat = {}; // 歌曲分类 初始值

export const Songs = (state: initialType = songsCat, action: songAction): initialType => {
    switch (action.type) {
        case GET_MUSIC_CAT:
            return merge(songsCat, { category: action.data });
        default:
            return state;
    }
};
