<!--
 * @Author: qianyun.1108 lvqianyun
 * @Date: 2023-10-02 21:55:38
 * @LastEditors: qianyun.1108 lvqianyun
 * @LastEditTime: 2023-10-02 22:15:08
 * @FilePath: /project/src/components/SvgIcon/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <svg :style="{width:width,height:height}">
      <!-- 属性值必须以#icon- 开头 -->
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>
<script setup lang="ts">
// 接收父组件传入的参数
defineProps({
    //xlink:href属性值前缀 
    prefix: {
        type: String,
        default: '#icon-'
    },
    // 使用的图标名字
    name:{
        type: String
    },
    // 图标颜色
    color: {
      type: String,
      default: ''
    },
    // 图标宽度
    width: {
      type: String,
      default: '16px'
    },
    // 图标宽度
    height: {
      type: String,
      default: '16px'
    }
})
</script>
<style scoped>
</style>