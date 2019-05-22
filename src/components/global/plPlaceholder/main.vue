<template>
  <div class="pl-placeholder">
    <div class="svg-img" v-if="src || icon">
      <img v-if="src" :src="src">
      <pl-svg-icon v-if="icon" :icon="icon" :size="size" />
    </div>
    <div :class="['pl-placeholder--text', textClass]">
      <slot v-if="$slots.message" name="message"></slot>
      <template v-else>
        <span>{{message}}</span>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'pl-placeholder',
  props: {
    src: { // 图片地址
      type: String,
      default: ''
    },
    icon: { // svg地址
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: '暂无数据'
    },
    textClass: {
      type: String,
      default: ''
    },
    size: [Number, String]
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
