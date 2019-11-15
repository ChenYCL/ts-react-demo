import { call, fork } from 'redux-saga/effects';

import { asyAdd, watchReduce } from '../redux-model/counter-saga/saga';

export default function* rootSaga() {
    yield fork(asyAdd);
    yield fork(watchReduce);
}
