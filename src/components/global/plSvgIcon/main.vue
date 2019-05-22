<template>
  <svg v-on="$listeners" class="pl-svg-icon" :style="svgSize" :class="svgClass" aria-hidden="true">
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
      type: String
    },
    size: { // svg大小
      type: [Number, String],
      default: 18
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.icon}`
    },
    svgClass () {
      if (this.className) {
        return `svg-icon ${this.className}`
      }
      return `svg-icon`
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
