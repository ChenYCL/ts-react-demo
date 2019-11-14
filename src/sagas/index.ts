import { take, takeLatest, takeEvery, put, call, fork, select, all } from 'redux-saga/effects';
import { getAll } from '../api/index';

export default function* rootSaga() {
    yield console.log('saga start');
}
