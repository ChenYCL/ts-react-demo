import { put, call, fork } from 'redux-saga/effects';
import req from '../../api/index';
import { SagaIterator } from 'redux-saga';

import { getMusicCatList } from './actions';

function* GetMusicCatList(): SagaIterator {
    const { all, categories, sub } = yield call(req.SongRequest.getMusicCat);
    const data = { all, categories, sub };
    yield put(getMusicCatList(data));
}

export function* songSaga() {
    yield fork(GetMusicCatList);
}
