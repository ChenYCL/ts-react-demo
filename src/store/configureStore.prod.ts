import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState?: any): Store {
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
    // 需要在创建Store以后通过run()方法调用rootSaga
    sagaMiddleware.run(rootSaga);

    return store;
}
