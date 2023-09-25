/*
 * @Author: qianyun.1108 lvqianyun
 * @Date: 2023-09-25 16:03:26
 * @LastEditors: qianyun.1108 lvqianyun
 * @LastEditTime: 2023-09-25 16:03:35
 * @FilePath: /project/commitlint.config.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    // 校验规则
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat',
          'fix',
          'docs',
          'style',
          'refactor',
          'perf',
          'test',
          'chore',
          'revert',
          'build',
        ],
      ],
      'type-case': [0],
      'type-empty': [0],
      'scope-empty': [0],
      'scope-case': [0],
      'subject-full-stop': [0, 'never'],
      'subject-case': [0, 'never'],
      'header-max-length': [0, 'always', 72],
    },
  }