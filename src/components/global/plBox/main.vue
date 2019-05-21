<template>
  <component :is="isTag" class="pl-box" :style="stylesObj">
    <slot></slot>
  </component>
</template>

<script>

export default {
  name: 'pl-box',
  props: {
    isTag: { // 标签名
      type: String,
      default: 'div'
    },
    itemTag: { // 子组件标签名
      type: String,
      default: 'div'
    },
    align: { // 垂直方向对齐方式
      type: String,
      default: 'center'
    },
    justify: { // 水平方向对齐方式
      type: String,
      default: 'flex-start'
    },
    classStyle: { // 补充样式
      type: String,
      default: ''
    }
  },

  computed: {
    stylesObj () {
      return {
        alignItems: this.align,
        justifyContent: this.justify,
        ...this.classStyle
      }
    }
  }
}
</script>

<style scoped lang="less">
@import './style.less';
</style>
