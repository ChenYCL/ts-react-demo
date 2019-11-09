/**
 * Created by Owen.chen on 2019/11/9
 * 作用于识别@别名路径跳转
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    context: path.relative(__dirname, './'),
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.md'],
        alias: {
            '@': path.resolve('src'),
        },
    },
};
