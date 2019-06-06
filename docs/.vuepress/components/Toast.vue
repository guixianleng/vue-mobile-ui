<template>
  <div class="toast">
    <card>
      <div class="demo">
        <h2>文字提示</h2>
        <van-button type="default" size="small" @click="$vueToast(text)">文字提示</van-button>
        <van-button type="default" size="small" @click="$vueToast(longText)">长文字提示</van-button>
      </div>
      <template v-slot:code>
        <highlight-code lang="vue">
          {{code1}}
        </highlight-code>
      </template>
    </card>
    <card>
      <div class="demo">
        <h2>颜色文字提示</h2>
        <van-button type="default" size="small" @click="handleColorful">颜色文字提示</van-button>
      </div>
      <template v-slot:code>
        <highlight-code lang="vue">
          {{code2}}
        </highlight-code>
      </template>
    </card>
    <card>
      <div class="demo">
        <h2>标题和内容文字提示</h2>
        <van-button type="default" size="small" @click="handleTitle">标题和内容文字提示</van-button>
      </div>
      <template v-slot:code>
        <highlight-code lang="vue">
          {{code3}}
        </highlight-code>
      </template>
    </card>
    <card>
      <div class="demo">
        <h2>加载提示</h2>
        <van-button type="default" size="small" @click="handleLoading1">加载提示</van-button>
      </div>
      <template v-slot:code>
        <highlight-code lang="vue">
          {{code4}}
        </highlight-code>
      </template>
    </card>
    <card>
      <div class="demo">
        <h2>成功/失败提示</h2>
        <van-button type="default" size="small" @click="$vueToast.success(successText)">成功提示</van-button>
        <van-button type="default" size="small" @click="$vueToast.fail(failText)">失败提示</van-button>
      </div>
      <template v-slot:code>
        <highlight-code lang="vue">
          {{code5}}
        </highlight-code>
      </template>
    </card>
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
      failText: '失败文案',
      code1: `
        this.$vueToast('提示文案')
        this.$vueToast('这是一条长文字提示，超过一定字数就会居中换行')
      `,
      code2: `
        this.$vueToast({
          type: 'loading',
          isClose: true,
          bgContent: 'white'
        })
      `,
      code3: `
        this.$vueToast({
          type: 'normal',
          title: '敬请期待',
          text: '程序猿正在努力开发中'
        })
      `,
      code4: `
        this.$vueToast({
          type: 'loading',
          message: '加载中...',
          isClose: true
        })
      `,
      code5: `
        this.$vueToast.success('成功文案')
        this.$vueToast.fail('失败文案')
      `
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

<style lang="less">
.toast {
  padding: 0 10px;
  .demo {
    margin-bottom: 5px;
  }
  .van-button {
    margin-right: 15px;
    margin-bottom: 10px;
  }
}
.pl-toast--text {
  white-space: normal!important
}
</style>
