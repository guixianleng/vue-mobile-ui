<template>
  <div :class="classes" :style="activeStyle">
    <div class="pl-steps--line"></div>
    <div class="pl-steps--circle">
      <pl-svg-icon :icon-class="svgName" :size="size" />
    </div>
    <div class="pl-steps--text">{{value}}</div>
  </div>
</template>

<script>

/**
 * that 实例对象
 * x 激活的行为
 * y 默认行为
 */
const activeFunc = (that, x, y = {}) => {
  const index = that.$parent.steps.indexOf(that)
  const { active } = that.$parent

  if (index <= active) {
    return x
  } else {
    return y
  }
}

export default {
  name: 'pl-steps',
  props: {
    value: { // 文本
      type: String,
      default: ''
    },
    dotSvg: { // 默认
      typeL: String,
      default: 'dot-circle'
    },
    activeSvg: { // svg地址
      typeL: String,
      default: 'checked'
    },
    size: { // svg大小
      type: Number,
      default: 14
    }
  },
  computed: {
    classes () { // 样式高亮
      const activeClass = ['pl-steps', 'pl-steps--done']
      const normalClass = ['pl-steps']

      return activeFunc(this, activeClass, normalClass)
    },
    svgName () { // 定义svg图标
      return activeFunc(this, this.activeSvg, this.dotSvg)
    },
    activeStyle () { // 激活的行内样式
      const { activeColor } = this.$parent
      const style = {
        color: activeColor,
        fontWeight: 600
      }
      const index = this.$parent.steps.indexOf(this)
      const { active } = this.$parent

      if (index === active) {
        return style
      } else {
        return {}
      }
    }
  },
  beforeCreate () {
    this.$parent.steps.push(this)
  },
  beforeDestroy () {
    const steps = this.$parent.steps
    const index = steps.indexOf(this)
    if (index >= 0) {
      steps.splice(index, 1)
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
