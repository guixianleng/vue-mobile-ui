<template>
  <div class="pl-panel" @click="handleClick(item)" :item="item">
    <pl-cell-group>
      <pl-cell-item
        :svg="svg"
        :title="status"
        :size="size"
        :value="time"
        title-class="title-class"
        value-class="value-class" />
    </pl-cell-group>
    <div class="pl-panel--content">
      <slot name="header" v-if="$slots.header"></slot>
      <slot name="footer" v-if="$slots.footer"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'pl-panel',
  props: {
    svg: { // svg地址
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 14
    },
    status: { // 状态
      type: String,
      default: ''
    },
    time: [String, Number], // 时间
    item: [Object, Number]
  },
  methods: {
    handleClick (item) {
      this.$emit('to', item)
    }
  }
}
</script>

<style lang="less">
@import './style.less';
</style>
