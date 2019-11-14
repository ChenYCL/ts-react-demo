import { createStore, applyMiddleware, Store, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../redux-model';

// @ts-ignore
export default function configureStore(initialState?: any): Store {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger()))
    );
    // @ts-ignore
    store.runSaga = sagaMiddleware.run;
    // @ts-ignore
    store.close = () => store.dispatch(END);
    return store;
}
