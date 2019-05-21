<template>
  <div class="pl-card">
    <pl-box align="top">
      <pl-cell>
        <img :src="imgUrl" alt="avatar logo">
      </pl-cell>
      <pl-cell>
        <div :class="classes">
          <span class="pl-card__title">{{title}}</span>
          <span class="pl-card__label" :style="labelStyle">{{labelName}}</span>
        </div>
        <div v-html="desc" class="pl-card__desc" v-if="!isDetail" @click="handleClick(item)" :item="item"></div>
      </pl-cell>
    </pl-box>
    <slot v-if="$slots.default"></slot>
  </div>
</template>

<script>
export default {
  name: 'pl-card',
  props: {
    imgUrl: { // 图片地址
      type: String,
      default: ''
    },
    title: { // 标题
      type: String,
      default: ''
    },
    labelName: { // 标签
      type: String,
      default: ''
    },
    desc: { // 描述
      type: String,
      default: ''
    },
    labelStyle: { // 标签样式
      type: Object,
      default: () => {
        return {
          color: '#BB9B6D',
          borderColor: '#BB9B6D'
        }
      }
    },
    item: { // 参数对象
      type: Object,
      default: () => {
        return {}
      }
    },
    isLink: { // 是否为跳转
      type: Boolean,
      default: false
    },
    to: { // 跳转到哪里
      type: String,
      default: ''
    },
    url: { // 跳转地址
      type: String,
      default: ''
    },
    isDetail: { // 是否为详情
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () { // 样式
      return {
        'pl-card__info': true,
        'list-flex': !this.isDetail,
        'detail': this.isDetail
      }
    }
  },
  methods: {
    handleClick (item) { // 点击跳转
      if (this.isLink) {
        if (this.url) {
          this.$router.push(`${this.url}/${item.id}`)
        } else {
          this.$router.push(`${this.to}`)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
