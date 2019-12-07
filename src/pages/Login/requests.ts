import apiHost from '../../config/proxy';

/**
 * 邮箱登录类型
 */
export interface emailType {
    email: string;
    password: string | number;
}
export interface phoneType {
    phone: number;
    password: number | string;
}
export default {
    Login: async (data: emailType): Promise<$AxiosResponse> => {
        return $http({
            // 邮箱登录
            url: `${apiHost}/login`,
            method: 'get',
            data: {
                ...data,
            },
        }).then((res: any) => {
            return res.data;
        });
    },
    LoginOut: async () => {
        console.log('退出');
    },
};
