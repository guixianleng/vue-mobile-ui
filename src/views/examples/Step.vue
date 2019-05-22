<template>
  <div class="step">
    <div class="demo">
      <h3>基本用法</h3>
      <pl-step :active="active" active-text-color="#313131">
        <pl-steps>预约成功</pl-steps>
        <pl-steps>预约专家</pl-steps>
        <pl-steps>正在服务</pl-steps>
        <pl-steps>完成服务</pl-steps>
      </pl-step>
      <van-button type="default" @click="handleNext">下一步</van-button>
    </div>
    <div class="demo">
      <h3>自定义样式和图标</h3>
      <pl-step
        :active="active"
        active-text-color="#0cedb8"
        active-line-color="#0cedb8"
        active-svg="done_1"
        dot-svg="dot">
        <pl-steps>买家下单</pl-steps>
        <pl-steps>商家接单</pl-steps>
        <pl-steps>买家提货</pl-steps>
        <pl-steps>交易完成</pl-steps>
      </pl-step>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'step',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    handleNext () {
      if (this.active > 2) {
        this.active = 0
        return false
      } else {
        this.active++
      }
    }
  }
}
</script>

<style lang="less" scoped>
.step {
  margin: 10px;
  h3 {
    margin-bottom: 10px;
  }
  .van-button {
    margin-top: 10px;
  }
}
</style>
