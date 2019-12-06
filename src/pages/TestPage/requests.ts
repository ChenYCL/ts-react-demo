// requests demo this module not include

import axios, { AxiosResponse } from 'axios';
// import { apiHost } from '../../config/proxy';

// import { xx } from './constants';R
// http://localhost:9000/comment/music?id=186016&limit=1

export interface musicType {
    id: number;
    limit: number;
}

export const R = {
    list: async (req: musicType): Promise<AxiosResponse<any>> => {
        return axios({
            url: `${apiHost}/comment/music`,
            method: 'post',
            data: {
                ...req,
            },
        });
    },
    // edit: (id: string, name: xx) => {
    //     return axios.put(`${apiHost}/list/edit/${id}`, name).then((res) => {
    //         return res.data;
    //     });
    // },
};
