<template>
  <div class="collapse">
    <card>
      <div class="demo">
        <h2>基本用法</h2>
        <pl-collapse
          :value="desc"
          align="center"
        />
      </div>
      <template v-slot:code>
        <highlight-code lang="vue">
          {{code1}}
        </highlight-code>
      </template>
    </card>
    <card>
      <div class="demo">
        <h2>文字方式</h2>
        <pl-collapse
          :value="desc"
          type="character"
          align="left"
        />
      </div>
      <template v-slot:code>
        <highlight-code lang="vue">
          {{code2}}
        </highlight-code>
      </template>
    </card>
    <card>
      <div class="demo">
        <h2>自定义文字和位置</h2>
        <pl-collapse
          :value="desc"
          align="right"
          type="character"
          unfold-text="详细"
          fold-text="挂起"
        />
      </div>
      <template v-slot:code>
        <highlight-code lang="vue">
          {{code3}}
        </highlight-code>
      </template>
    </card>
  </div>
</template>

<script>

export default {
  name: 'collapse',
  data () {
    return {
      desc: `
        东风本田思域在时隔两年之后终于迎来了改款，外观方面，新车同时提供了普通版和运动版两种外观可选，
        相比现款车型，新思域主要在车身颜色和部分包围处做了调整升级，整体的设计语言和老款相似，
        区别在于运动版（即燃动版和燃擎版）用上了黑色套件，包括前格栅横条、灯眉、前包围、轮圈、侧裙、门把手等处。
        东风本田思域在时隔两年之后终于迎来了改款，外观方面，新车同时提供了普通版和运动版两种外观可选，
        相比现款车型，新思域主要在车身颜色和部分包围处做了调整升级，整体的设计语言和老款相似。。。
      `,
      code1: `<pl-collapse :value="desc" align="center" />`,
      code2: `<pl-collapse type="character" align="left" />`,
      code3: `<pl-collapse :value="desc" align="right"
          type="character"
          unfold-text="详细"
          fold-text="挂起"
        />`
    }
  }
}
</script>

<style lang="less" scoped>
.collapse{}
</style>
