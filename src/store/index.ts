import {combineReducers,Store,createStore} from 'redux'

import {CounterReducer} from './couter/reducers'


const rootReducer = combineReducers({
    CounterReducer,
})

export const configStore:Store = createStore(rootReducer)  // 报错
// export const configStore:Store = createStore(CounterReducer)  // 不报错


export type AppState = ReturnType<typeof rootReducer>  // reducer 返回的数据类型
