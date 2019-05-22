<template>
  <div class="collapse">
    <div class="demo">
      <h3>基本用法</h3>
      <pl-collapse
        :value="desc"
        :isChara="false"
      />
    </div>
    <div class="demo">
      <h3>文字方式</h3>
      <pl-collapse
        :value="desc"
      />
    </div>
    <div class="demo">
      <h3>自定义文字和位置</h3>
      <pl-collapse
        :value="desc"
        align="right"
        unfoldText="详细"
        packUpText="挂起"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'collapse',
  data () {
    return {
      desc: '东风本田思域在时隔两年之后终于迎来了改款，外观方面，新车同时提供了普通版和运动版两种外观可选，相比现款车型，新思域主要在车身颜色和部分包围处做了调整升级，整体的设计语言和老款相似，区别在于运动版（即燃动版和燃擎版）用上了黑色套件，包括前格栅横条、灯眉、前包围、轮圈、侧裙、门把手等处。'
    }
  }
}
</script>

<style lang="less" scoped>
.collapse {
  h3 {
    margin: 10px;
  }
}
</style>
