<!--
 * @Author: qianyun.1108 lvqianyun
 * @Date: 2023-09-23 14:21:55
 * @LastEditors: qianyun.1108 lvqianyun
 * @LastEditTime: 2023-10-03 15:46:30
 * @FilePath: /project/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h1 class="color">我是App</h1>
    <el-button type="primary">Primary</el-button>
    <!-- 测试SVG -->
    <svg-icon name="phone"></svg-icon>
  </div>
</template>
<script setup lang="ts">
import { reqLogin } from './api/user'
import { onMounted } from 'vue';
console.log(import.meta.env)

onMounted(()=> {
 reqLogin({username: 'admin',password:'111111'}).then(res => {
  console.log(res)
 })
})
</script>
<style scoped lang="scss">
.color{
  color: $color;
}

</style>
