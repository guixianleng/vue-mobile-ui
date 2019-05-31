<template>
  <div class="toast">
    <div class="demo">
      <h3>文字提示</h3>
      <van-button type="default" @click="$vueToast(text)">文字提示</van-button>
      <van-button type="default" @click="$vueToast(longText)">长文字提示</van-button>
    </div>
    <div class="demo">
      <h3>颜色文字提示</h3>
      <van-button type="default" @click="handleColorful">颜色文字提示</van-button>
    </div>
    <div class="demo">
      <h3>标题和内容文字提示</h3>
      <van-button type="default" @click="handleTitle">标题和内容文字提示</van-button>
    </div>
    <div class="demo">
      <h3>加载提示</h3>
      <h3>加载基本用法</h3>
      <van-button type="default" @click="handleLoading1">加载提示</van-button>
      <h3>自定义遮盖层背景、内容提示背景和图标</h3>
      <van-button type="default" @click="handleLoading2">更改内容背景</van-button>
      <van-button type="default" @click="handleLoading3">更改加载图标</van-button>
      <van-button type="default" @click="handleLoading4">更改遮盖层背景</van-button>
    </div>
    <div class="demo">
      <h3>成功/失败提示</h3>
      <van-button type="default" @click="$vueToast.success(successText)">成功提示</van-button>
      <van-button type="default" @click="$vueToast.fail(failText)">失败提示</van-button>
    </div>
  </div>
</template>

<script>
import vueToast from '../../../src/components/Toast'

export default {
  name: 'toast',
  components: {
    [vueToast.name]: vueToast
  },
  data () {
    return {
      text: '提示文案',
      longText: '这是一条长文字提示，超过一定字数就会居中换行',
      successText: '成功文案',
      failText: '失败文案'
    }
  },
  methods: {
    handleColorful () {
      this.$vueToast({
        type: 'colorful',
        title: '领取成功',
        colorText: '+30积分',
        bgContent: 'white'
      })
    },
    handleTitle () {
      this.$vueToast({
        type: 'normal',
        title: '敬请期待',
        text: '程序猿正在努力开发中'
      })
    },
    handleLoading1 () {
      this.$vueToast({
        type: 'loading',
        message: '加载中',
        isClose: true
      })
    },
    handleLoading2 () {
      this.$vueToast({
        type: 'loading',
        isClose: true,
        bgContent: 'white'
      })
    },
    handleLoading3 () {
      this.$vueToast({
        type: 'loading',
        isClose: true,
        animation: true,
        size: 48,
        animationName: 'v-loading',
        icon: 'v_loading'
      })
    },
    handleLoading4 () {
      this.$vueToast({
        type: 'loading',
        isClose: true,
        background: 'rgba(249, 120, 39, 0.2)'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.toast {
  padding: 0 15px;
  .demo {
    margin-bottom: 5px;
  }
  .van-button {
    margin-right: 15px;
    margin-bottom: 10px;
  }
  .moni {
    background-color: transparent;
  }
}
</style>
