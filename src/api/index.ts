import axios from 'axios';
import { demoInterface } from './types';
import { apiHost } from '../config';

class userService {
    async getAll(): Promise<any> {
        axios({
            url: `${apiHost}/agents`,
            method: 'get',
        });
    }

    async modify(data: demoInterface): Promise<any> {
        axios({
            url: `${apiHost}/agent/${data.id}`,
            method: `PUT`,
            data,
        });
    }
}
