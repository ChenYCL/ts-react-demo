import { Add, Reduce } from './actions';
import { put, call, take, delay, takeEvery } from 'redux-saga/effects';

// actionChannel action的缓存队列

export function* asyAdd() {
    yield delay(5000);
    yield put(Add());
}

export function* watchReduce() {
    yield takeEvery('REDUCE', () => console.log('减少检测到'));
}

// 替换内容

// function * watchAdd(){
//     while(true){
//         yield take('Reduce');
//         console.log('减少被检测到')
//       }
// }
