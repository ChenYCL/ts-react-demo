import axios from 'axios';
import { demoInterface } from './types';
import { apiHost } from '../config';

export async function getAll(): Promise<any> {
    return axios({
        url: `${apiHost}/agents`,
        method: 'get',
    });
}

export async function modify(data: demoInterface): Promise<any> {
    return axios({
        url: `${apiHost}/agent/${data.id}`,
        method: `PUT`,
        data,
    });
}
