<template>
  <div class="pl-step">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'pl-step',
  props: {
    active: {
      type: Number,
      default: 1
    },
    dotSvg: { // 默认
      typeL: String,
      default: 'dot-circle'
    },
    activeSvg: { // svg地址
      typeL: String,
      default: 'checked'
    },
    activeTextColor: {
      typeL: String,
      default: '#268AED'
    },
    activeLineColor: {
      typeL: String,
      default: '#268AED'
    }
  },
  data () {
    return {
      steps: []
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
