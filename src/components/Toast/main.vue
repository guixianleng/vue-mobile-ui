<template>
  <transition-group :name="mergedOptions.transition">
    <div
      :ref="mergedOptions.id"
      class="pl-toast"
      :class="clazz"
      :key="1"
      :transition="mergedOptions.transition"
      v-show="showing">
      <div class="pl-toast-content">
        <pl-svg-icon :icon="svgIcon" :size="60" v-if="svgIcon"/>
        <div v-html="htmlRender"></div>
      </div>
    </div>
    <div
      v-show="mergedOptions.mask && showing"
      :key="2"
      :transition="mergedOptions.transition"
      class="pl-toast-overlay">
    </div>
    <div
      v-show="isLoading"
      class="pl-toast-loading"
      :style="backgroundStyle"
      :key="3">
      <div class="pl-toast-loading--content" :class="clazz">
        <pl-svg-icon
          :icon="svgIcon"
          :size="mergedOptions.size"
          :animation="mergedOptions.animation"
          :animationName="mergedOptions.animationName" />
        <div v-html="htmlRender" v-if="mergedOptions.message" class="pl-toast-loading--msg"></div>
      </div>
    </div>
  </transition-group>
</template>

<script>

const defaultOptions = {
  id: 'pl-toast',
  className: '',
  position: 'middle', // top, middle, bottom
  parent: 'body',
  transition: 'fade', // slide-down, slide-up, slide-left, slide-right
  duration: 2000,
  message: '',
  type: 'text', // text, html, normal, colorful, loading, close, success, fail
  title: '',
  text: '',
  background: 'rgba(0, 0, 0, 0.3)',
  bgContent: 'black', // black white transparent
  color: '#F89516', // 文案颜色
  colorText: '', // 色彩文案
  mask: true,
  size: 48, // 加载图标大小
  animation: false, // 是否开启加载动画
  animationName: '', // 加载动画名
  icon: '', // icon图标
  isClose: false // 是否允许主动关闭加载
}

export default {
  name: 'Toast',
  defaultOptions: defaultOptions,
  data () {
    return {
      queue: [],
      option: {},
      showing: false,
      isLoading: false
    }
  },
  computed: {
    mergedOptions () {
      return Object.assign({}, defaultOptions, this.option)
    },
    backgroundStyle () {
      return {
        backgroundColor: this.mergedOptions.background
      }
    },
    clazz () { // 控制样式
      let clazz = []
      let className = this.option.className
      let position = this.mergedOptions.position
      let bgContent = this.mergedOptions.bgContent
      let type = this.mergedOptions.type

      if (className) {
        if (typeof className === 'string') {
          clazz.push(className)
        }
        if (Array.isArray(className)) {
          clazz = clazz.concat(className)
        }
      }
      if (position) {
        clazz.push(`pl-toast-${position}`)
      }
      if (bgContent) {
        clazz.push(`pl-toast--${bgContent}`)
      }
      if (type === 'text') {
        clazz.push(`pl-toast--text`)
      }
      return clazz.join(' ')
    },
    svgIcon () {
      let type = this.mergedOptions.type
      if (this.mergedOptions.icon) {
        return this.mergedOptions.icon
      } else {
        switch (type) {
          case 'success':
            return 'success'
          case 'fail':
            return 'fail'
          case 'loading':
            return 'loading'
          default:
            return this.icon
        }
      }
    },
    htmlRender () { // 渲染提示内容
      const type = this.mergedOptions.type
      const message = this.mergedOptions.message
      switch (type) {
        case 'html':
          return `<div v-html=${message}></div>`
        case 'colorful':
          return `
            <div>
              <span>${this.mergedOptions.title}</span>
              <span style="color: ${this.mergedOptions.color}">
                ${this.mergedOptions.colorText}
              </span>
            </div>
          `
        case 'normal':
          return `
            <div>${this.mergedOptions.title}</div>
            <div>${this.mergedOptions.text}</div>
          `
        case 'loading':
          return `<span>${message}</span>`
        default:
          return `<span>${message}</span>`
      }
    }
  },
  watch: {
    queue () {
      let pending = this.queue.length
      if (pending === 0) {
        return
      }

      this.option = this.queue[0]

      if (this.option.type === 'loading') {
        this.isLoading = true
        if (this.mergedOptions.isClose) { // 允许关闭的倒计时
          this.timeoutId = setTimeout(() => {
            this.isLoading = false
            this.timeoutId = null
            setTimeout(() => this.queue.shift())
          }, this.mergedOptions.duration)
        }
      } else {
        this.showing = true
        this.timeoutId = setTimeout(() => {
          this.showing = false
          this.timeoutId = null
          setTimeout(() => this.queue.shift())
        }, this.mergedOptions.duration)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
