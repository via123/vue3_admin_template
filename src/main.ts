/*
 * @Author: qianyun.1108 lvqianyun
 * @Date: 2023-09-23 14:21:55
 * @LastEditors: qianyun.1108 lvqianyun
 * @LastEditTime: 2023-10-03 15:16:25
 * @FilePath: /project/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
// 引入UI框架element UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
// svg插件配置
import 'virtual:svg-icons-register'

// 引入自定义插件对象：注册整个项目全局组件
import gloalComponent from '@/components'
// 安装自定义插件
app.use(gloalComponent)
// 引入模板的全局样式
import '@/styles/index.scss'
// 将应用挂载到节点上
app.mount('#app')