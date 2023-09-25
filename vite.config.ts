/*
 * @Author: qianyun.1108 lvqianyun
 * @Date: 2023-09-23 14:21:55
 * @LastEditors: qianyun.1108 lvqianyun
 * @LastEditTime: 2023-09-25 16:16:40
 * @FilePath: /project/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
