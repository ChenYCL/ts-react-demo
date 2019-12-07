import { isDev } from '../utils/isDev';

export const BASE_NAME = isDev ? '/' : '/';

const apiHost = isDev ? 'https://yo8.fun' : 'https://yo8.fun';

/*
 *   歌曲列表
 *         http://localhost:9000/comment/music?id=186016&limit=1
 * */
export default apiHost;
