export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

/**
 * 创建不同action的三种状态
 * @param base
 */
export const createRequestTypes = (base: string): object => {
    return [REQUEST, SUCCESS, FAILURE].reduce((acc: any, type: string) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
};

/**
 * 调用action的函数
 * @param type
 * @param payload
 */
export const action = (type: string, payload = {}) => {
    return { type, ...payload };
};

// eg. 异步
/*
*
*     export const user = {
        request: login => action(USER[REQUEST], {login}),
        success: (login, response) => action(USER[SUCCESS], {login, response}),
        failure: (login, error) => action(USER[FAILURE], {login, error}),
      }

* */

/*  eg.非异步
    export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE)

*
* */
