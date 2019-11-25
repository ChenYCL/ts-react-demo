import { fork, ForkEffectDescriptor, SimpleEffect } from 'redux-saga/effects';
import { countSaga } from '../pages/TestPage/saga';

export default function* rootSaga() {
    yield fork(countSaga);
}
