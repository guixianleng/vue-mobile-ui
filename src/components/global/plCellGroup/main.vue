<template>
  <component :is="isTag" class="pl-cell-group">
    <div v-if="title" class="pl-cell-group--title">{{title}}</div>
    <slot v-if="$slots.default"></slot>
  </component>
</template>

<script>

export default {
  name: 'pl-cell-group',
  props: {
    isTag: {
      type: String,
      default: 'div'
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
