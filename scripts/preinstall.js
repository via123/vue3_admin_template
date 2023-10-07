/*
 * @Author: qianyun.1108 lvqianyun
 * @Date: 2023-09-29 15:45:38
 * @LastEditors: qianyun.1108 lvqianyun
 * @LastEditTime: 2023-09-29 15:46:02
 * @FilePath: /project/scripts/preinstall.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
if (!/npm/.test(process.env.npm_execpath || "")) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`
  );
  process.exit(1);
}
