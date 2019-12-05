import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { REDIRECT_URL } from '../config/constants';

interface T extends AxiosRequestConfig {
    config: {
        url?: string;
    };
}

class HttpHelper {
    private store: any;
    private seStore: any;

    constructor() {
        this.store = localStorage;
        this.seStore = sessionStorage;
    }

    public successHelper(res: AxiosResponse<any>): void {
        const url = res?.config?.url?.split('?')[0];
        const {
            data: { errors },
        } = res;
        switch (res.status) {
            case 200:
                const path = url?.split('/api');
                if (path?.[1] === '/login') {
                    console.log('登陆成功');
                } else if (path?.[1] === '/logout') {
                    this.store.clear();
                    console.log('退出登录成功');
                    setTimeout(() => {
                        location.href = '/login';
                    }, 1000);
                } else if (path?.[1] === '/upload-file') {
                    console.log('文件上传成功');
                } else if (path?.[0] === '/graphql' && errors) {
                    console.error(errors[0].message); // graphql status:200 response contain errors
                } else {
                    // console.success('操作成功');
                }
                break;
            default:
                //
                break;
        }
    }

    public errorHelper(err: AxiosResponse): void {
        // console.log(err, 'err.data.msg.statusText')
        const path = err?.config?.url?.split('?')[0];
        const data = err.data; // server response data
        switch (err.status) {
            case 400:
                const arr = path?.split('/api');
                if (arr?.[1] === '/login') {
                    console.error('用户名或密码错误');
                } else if (arr?.[1] === '/upload-file') {
                    console.error('文件上传失败');
                } else if (arr?.[0]) {
                    console.error(data.errors[0].message || 'graphql params error');
                } else {
                    console.error(data.msg || err.statusText);
                }
                break;
            case 401:
                this.store.clear();
                console.error('请重新登录');
                this.seStore.setItem(REDIRECT_URL, location.pathname);
                setTimeout(() => {
                    location.href = '/login';
                }, 1000);
                break;
            case 403:
                console.error(data.msg || '错误, 禁止访问');
                break;
            case 404:
                console.error('未找到, 未找到资源,请检查');
                break;
            case 405:
                console.error('错误, 此方法不允许');
                break;
            case 406:
                console.error('错误, 此方法不接受,请检查');
                break;
            case 500:
                console.error(data.msg || data.errors[0]);
                break;
            case 503:
                console.error('连接被拒绝, 服务不可用');
                break;
            case 504:
                console.error('网关超时, 请与运维小郭联系');
                break;
            default:
                console.error('错误, 服务端未知错误');
                break;
        }
    }
}

export default new HttpHelper();
