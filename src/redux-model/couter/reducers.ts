import { ADD, CounterActionTypes, countType, REDUCE } from './types';
// import {merge,union} from 'lodash'
// reducer拿到类型 并定义初始值
const initialState: countType = 1;

export function CounterReducer(state: countType = initialState, action: CounterActionTypes): countType {
    switch (action.type) {
        case ADD:
            return state + 1;
        case REDUCE:
            return state - 1;
        default:
            return state;
    }
}

/*
*    function updatePagination(state = {
        isFetching: false,
        nextPageUrl: undefined,
        pageCount: 0,
        ids: []
  }, action) {
    switch (action.type) {
      case requestType:
        return merge({}, state, {
          isFetching: true
        })
      case successType:
        return merge({}, state, {
          isFetching: false,
          ids: union(state.ids, action.response.result),
          nextPageUrl: action.response.nextPageUrl,
          pageCount: state.pageCount + 1
        })
      case failureType:
        return merge({}, state, {
          isFetching: false
        })
      default:
        return state
    }
  }
*
* */
