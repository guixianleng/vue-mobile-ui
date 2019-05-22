<template>
  <component :is="tag" class="pl-cell-item" @click.stop="handleLink">
    <div class="pl-cell-item__header">
      <div class="icon-img" v-if="isUrl">
        <img :src="src" alt="image" v-if="src">
        <pl-svg-icon :icon="icon" v-if="icon" :size="size" />
      </div>
      <div
        v-if="title"
        :style="alignWay"
        :class="['pl-cell-item__title', classes.titleClass]"
        v-html="title">
      </div>
      <!-- 左侧插槽 -->
      <div v-if="$slots.desc" style="max-width: 80%">
        <slot name="desc"></slot>
      </div>
      <!-- 右侧内容 -->
      <div
        v-if="value"
        :class="['pl-cell-item__value', classes.valueClass]"
        @click="handleValue(itemIndex)"
        v-html="value">
      </div>
      <!-- 右侧的插槽 -->
      <div v-if="$slots.right" class="pl-cell-item__value">
        <slot name="right"></slot>
      </div>
      <div v-if="isLink && !$slots.right" class="pl-cell-item__value">
        <pl-svg-icon icon="arrow-right" size="18" />
      </div>
    </div>
    <div class="pl-cell-item__desc" v-if="desc" v-html="desc"></div>
  </component>
</template>

<script>

export default {
  name: 'pl-cell-item',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    src: { // 图片地址
      type: String,
      default: ''
    },
    icon: { // svg名称
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: 24
    },
    title: { // 标题
      type: String,
      default: ''
    },
    value: { // 右侧内容
      type: String,
      default: ''
    },
    desc: { // 描述信息
      type: String,
      default: ''
    },
    titleClass: { // 标题样式
      type: String,
      default: ''
    },
    valueClass: { // 内容样式
      type: String,
      default: ''
    },
    itemIndex: Number, // 第n个cell-item
    titleAlign: { // 标题水平方向位置, 默认居左
      type: String,
      default: 'left'
    },
    isLink: {
      type: Boolean,
      default: false
    },
    to: { // 跳转地址
      type: String,
      default: ''
    }
  },
  computed: {
    classes () { // 修改样式
      return {
        titleClass: this.titleClass,
        valueClass: this.valueClass
      }
    },
    isUrl () { // 是否显示图片或者svg或者icon
      return this.src || this.icon
    },
    alignWay () { // 只有标题的时候设置居中
      return {
        textAlign: this.titleAlign
      }
    }
  },
  methods: {
    handleLink () {
      if (this.isLink) {
        this.$router.push(this.to)
      }
    },
    handleValue (itemIndex) { // 点击内容
      this.$emit('clickVal', itemIndex)
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
