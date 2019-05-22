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
      <van-button type="default" @click="handleLoading">加载提示</van-button>
      <van-button type="default" @click="handleLoading('no')">无加载文案提示</van-button>
    </div>
    <div class="demo">
      <h3>成功/失败提示</h3>
      <van-button type="default" @click="$vueToast.success(successText)">成功提示</van-button>
      <van-button type="default" @click="$vueToast.fail(failText)">失败提示</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
import vueToast from 'components/Toast'

export default {
  name: 'toast',
  components: {
    [Button.name]: Button,
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
        bgStyle: 'white'
      })
    },
    handleTitle () {
      this.$vueToast({
        type: 'normal',
        title: '敬请期待',
        text: '程序猿正在努力开发中'
      })
    },
    handleLoading (index) {
      const msg = index === 'no' ? '' : '加载中...'
      this.$vueToast({
        type: 'loading',
        message: msg,
        isClose: true
      })
    }
  }
}
</script>

<style lang="less" scoped>
.toast {
  padding: 0 15px;
  h3 {
    margin-bottom: 10px;
  }
  .van-button {
    margin-right: 15px
  }
}
</style>
