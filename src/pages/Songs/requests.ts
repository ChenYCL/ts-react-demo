export const R = {
    getMusicCat: async (): Promise<AxiosResponse> => {
        return axios({
            url: `${apiHost}/playlist/catlist`,
            method: 'post',
        }).then((res: any) => {
            return res.data;
        });
    },
};
