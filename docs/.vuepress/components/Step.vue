<template>
  <div>
    <card>
      <div class="demo">
        <h3>基本用法</h3>
        <pl-step :active="active" active-text-color="#313131">
          <pl-steps>预约成功</pl-steps>
          <pl-steps>预约专家</pl-steps>
          <pl-steps>正在服务</pl-steps>
          <pl-steps>完成服务</pl-steps>
        </pl-step>
        <van-button @click="handleNext" type="default" size="small">下一步</van-button>
      </div>
      <template v-slot:code>
        <highlight-code lang="vue">
          {{code1}}
        </highlight-code>
      </template>
    </card>
    <card>
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
      <template v-slot:code>
        <highlight-code lang="vue">
          {{code2}}
        </highlight-code>
      </template>
    </card>
  </div>
</template>

<script>
import plStep from '../../../src/components/global/plStep'
import plSteps from '../../../src/components/global/plSteps'

export default {
  name: 'step',
  components: {
    'pl-step': plStep,
    'pl-steps': plSteps
  },
  data () {
    return {
      active: 0,
      code1: `
        <pl-step
          :active="active"
          active-text-color="#313131">
          <pl-steps>预约成功</pl-steps>
          <pl-steps>预约专家</pl-steps>
          <pl-steps>正在服务</pl-steps>
          <pl-steps>完成服务</pl-steps>
        </pl-step> 
       `,
       code2: `
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
       `,
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
h3 {
  margin-bottom: 10px;
}
.van-button {
  margin-top: 10px;
}
</style>
