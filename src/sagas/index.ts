import { fork } from 'redux-saga/effects';
import { countSaga } from '../pages/TestPage/saga';
import { songSaga } from '../pages/Songs/saga';

export default function* rootSaga() {
    yield fork(countSaga);
    yield fork(songSaga);
}
