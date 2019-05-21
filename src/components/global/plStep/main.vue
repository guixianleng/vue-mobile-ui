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
    activeColor: {
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
