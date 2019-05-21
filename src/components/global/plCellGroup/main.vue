<template>
  <component :is="isTag" class="pl-cell-group">
    <slot></slot>
  </component>
</template>

<script>

export default {
  name: 'pl-cell-group',
  props: {
    isTag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
