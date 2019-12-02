import { Action } from 'redux';
import { initialType } from './reducer';
import { GET_MUSIC_CAT } from './constants';

export interface CAT_ACTION_TYPE extends Action {
    type: typeof GET_MUSIC_CAT;
}

export type songAction = CAT_ACTION_TYPE;

export const getMusicCatList = (data: initialType) => ({
    type: GET_MUSIC_CAT,
    data,
});
