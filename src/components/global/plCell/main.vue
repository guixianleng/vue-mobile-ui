<template>
  <component :is="tag || $parent.itemTag" class="pl-cell">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'pl-cell',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
