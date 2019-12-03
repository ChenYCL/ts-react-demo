import { put, takeEvery, call, fork } from 'redux-saga/effects';
import { R } from '../../api/index';
import { SagaIterator } from 'redux-saga';

import { getMusicCatList } from './actions';

function* GetMusicCatList(): SagaIterator {
    const { all, categories, sub } = yield call(R.getMusicCat);
    const data = { all, categories, sub };
    console.log(data);
    yield put(getMusicCatList(data));
}

export function* songSaga() {
    yield fork(GetMusicCatList);
}
