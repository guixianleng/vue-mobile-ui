<template>
  <svg v-on="$listeners" class="pl-svg-icon" :animation="animation" :style="svgSize" :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>

export default {
  name: 'pl-svg-icon',
  props: {
    icon: {
      type: String
    },
    className: { // 自定义样式名称
      type: [String, Array],
      default: ''
    },
    size: { // svg大小
      type: [Number, String],
      default: 18
    },
    animation: { // 是否开启动画
      type: Boolean,
      default: false
    },
    animationName: { // 开启动画名
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.icon}`
    },
    svgClass () { // svg样式
      let clazz = ['svg-icon']
      if (typeof className === 'string') {
        clazz.push(className)
      }
      if (Array.isArray(this.className)) {
        clazz = clazz.concat(className)
      }
      if (this.animationName) {
        clazz.push(this.animationName)
      }
      return clazz.join(' ')
    },
    svgSize () {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
