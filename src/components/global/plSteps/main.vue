<template>
  <div class="pl-steps" :style="activeStyle">
    <div class="pl-steps--line" :style="lineActive"></div>
    <div class="pl-steps--circle">
      <pl-svg-icon :icon="svgName" :size="size" />
    </div>
    <div class="pl-steps--text">{{ labelName }}</div>
  </div>
</template>

<script>
import plSvgIcon from '../plSvgIcon'

/**
 * that 实例对象
 * activeBehavior 激活的行为
 * defaultBehavior 默认行为
 */
const activeFunc = (that, activeBehavior, defaultBehavior = {}) => {
  const index = that.$parent.steps.indexOf(that)
  const { active } = that.$parent

  if (index <= active) {
    return activeBehavior
  } else {
    return defaultBehavior
  }
}

export default {
  name: 'pl-steps',
  components: {
    plSvgIcon
  },
  props: {
    value: { // 文本
      type: String,
      default: ''
    },
    size: { // svg大小
      type: [Number, String],
      default: 14
    }
  },
  computed: {
    svgName () { // 定义svg图标
      const { activeSvg, dotSvg } = this.$parent

      return activeFunc(this, activeSvg, dotSvg)
    },
    activeStyle () { // 激活的行内样式
      const { activeTextColor } = this.$parent
      const style = {
        color: activeTextColor,
        fontWeight: 600
      }
      const index = this.$parent.steps.indexOf(this)
      const { active } = this.$parent

      if (index === active) {
        return style
      } else {
        return {}
      }
    },
    lineActive () { // 线条样式高亮
      const { activeLineColor } = this.$parent
      let lineActStyle = {
        backgroundColor: activeLineColor
      }
      let lineActdefault = {
        backgroundColor: '#ebedf0'
      }
      return activeFunc(this, lineActStyle, lineActdefault)
    },
    labelName () { // 标签内容
      if (this.$slots.default) {
        return this.$slots.default[0].text
      } else {
        return this.value
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
