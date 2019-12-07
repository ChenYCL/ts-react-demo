import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import apiHost from '../src/config/proxy';

// 全局交互
// import { MessageApi } from 'antd/lib/message'
// import { NotificationApi } from 'antd/lib/notification'

/**
 * 全局通用的类型定义
 */

declare global {
    export const host: apiHost;  // 全局读不到

    export type $AxiosResponse = AxiosResponse;
    export const axios = Axios;

    export interface IProps extends RouteComponentProps {
        [key: string]: any;
    }

    export interface Props {
        children?: JSX.Element[] | JSX.Element | React.ReactNode;
        className?: string;
    }

    export interface WithRouterName {
        routerName: string;
    }

    export interface actionTypes {
        type: string;
        payload?: any;
    }

    export const $http: AxiosInstance;

    // export const $msg: MessageApi;
    // export const $notice: NotificationApi;
}
