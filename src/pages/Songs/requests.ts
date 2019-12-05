// import { AxiosInstance as $http } from 'axios';
export default {
    getMusicCat: async (): Promise<$AxiosResponse> => {
        return $http({
            url: `${apiHost}/playlist/catlist`,
            method: 'post',
        }).then((res: any) => {
            return res.data;
        });
    },
};
