import { combineReducers, Store, createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CounterReducer } from './couter/reducers';

const rootReducer = combineReducers({
    CounterReducer,
});

export const configStore: Store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware()
        // thunk
    )
);

export type AppState = ReturnType<typeof rootReducer>; // reducer 返回的数据类型
