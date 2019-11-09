/**
 * Created by Owen.chen on 2019/11/9
 */
module.exports={
    extends: 'stylelint-config-standard',
    // 插件
    plugins: ['stylelint-scss'],
    // 忽略一些文件检测类型
    ignoreFiles: ['node_modules/**/*.scss','**/*.ts','**/*.md','**/*.tsx','**/*.js'],
    // @mixin @include等内容规则
    rules: {
        indentation: 2,
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown":true,
    }
}
