import { put, takeEvery, fork, delay } from 'redux-saga/effects';

import { SagaIterator } from 'redux-saga';

import { addHandler } from './actions';

function* autoAdd(): SagaIterator {
    yield delay(5000);
    yield put(addHandler()); // active add
}

export function* watchReduce() {
    yield takeEvery('REDUCE', () => console.log('now reduce 1'));
}

export function* countSaga() {
    // const [auto, watch] = yield all([call(autoAdd), call(watchReduce)]);
    yield fork(autoAdd);
    yield fork(watchReduce);
}

/*
*  async
*
*   import {
      put,
      takeEvery,
      call,
    } from 'redux-saga/effects';
    import { SagaIterator } from 'redux-saga';
    import { GET_EMPLOYEE } from './constants';
    import { getEmployeesSuccessAction } from './actions';
    import { employeesRequests } from './requests';

    function* getEmployeesSaga(): SagaIterator {
      const employee = yield call(employeesRequests.list);
      yield put(getEmployeesSuccessAction(employee));
    }

    export function* employeesActionSaga(): Generator {
      yield takeEvery(GET_EMPLOYEE, getEmployeesSaga);
    }
*
* */
