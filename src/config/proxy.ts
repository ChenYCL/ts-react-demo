import { isDev } from '../utils/isDev';

export const BASE_NAME = isDev ? '/' : '/';

export const apiHost = isDev ? 'http://localhost:9000' : 'http:localhost:3001';

/*
 *   歌曲列表
 *         http://localhost:9000/comment/music?id=186016&limit=1
 * */
