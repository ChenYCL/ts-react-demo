import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { Add, Reduce } from './actions';

export function* addAsync() {
    yield delay(1000);
    yield put(Add());
}
