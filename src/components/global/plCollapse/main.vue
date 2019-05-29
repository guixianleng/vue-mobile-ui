<template>
  <div class="pl-collapse">
    <div class="pl-collapse__content" v-html="value" :style="styles"></div>
    <div class="pl-collapse__icon" @click="handleTrigger" :style="toWay">
      <span v-if="type === 'character'">{{isTrigger ? unfoldText : foldText}}</span>
      <pl-svg-icon :icon="iconName" size="12" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'pl-collapse',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: { // 展示伸缩方式 arrow character
      type: String,
      default: 'arrow'
    },
    align: { // 位置 center left right
      type: String,
      default: 'center'
    },
    unfoldText: {
      type: String,
      default: '展开'
    },
    foldText: {
      type: String,
      default: '收起'
    }
  },
  computed: {
    iconName () { // 箭头方向
      return this.isTrigger ? 'arrow_d' : 'arrow_u'
    },
    styles () { // 收缩样式改变
      return {
        'display': this.isTrigger ? '-webkit-box' : 'block'
      }
    },
    toWay () { // 文字收缩样式
      return {
        'text-align': this.align ? this.align : 'right'
      }
    }
  },
  data () {
    return {
      isTrigger: true
    }
  },
  methods: {
    handleTrigger () { // 点击切换状态
      this.isTrigger = !this.isTrigger
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
