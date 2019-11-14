import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../redux-model';

// @ts-ignore
export default function configureStore(initialState?: any): Store {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
    // @ts-ignore
    store.runSaga = sagaMiddleware.run;
    // @ts-ignore
    store.close = () => store.dispatch(END);
    return store;
}
