/*
 * @Author: qianyun.1108 lvqianyun
 * @Date: 2023-10-02 22:17:59
 * @LastEditors: qianyun.1108 lvqianyun
 * @LastEditTime: 2023-10-02 22:30:32
 * @FilePath: /project/src/components/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 对外暴露插件对象
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
//全局对象
const allGloablComponent = { SvgIcon, Pagination }

export default {
  // 务必叫install方法
  install(app) {
    console.log(123, app)
    Object.keys(allGloablComponent).forEach((key) => {
      // 注册为全局组件
      app.component(key, allGloablComponent[key])
    })
  },
}
