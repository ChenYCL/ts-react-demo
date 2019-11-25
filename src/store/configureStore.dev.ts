import { createStore, applyMiddleware, Store, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState?: any): Store {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger()))
    );
    // 需要在创建Store以后通过run()方法调用rootSaga
    sagaMiddleware.run(rootSaga);

    return store;
}
