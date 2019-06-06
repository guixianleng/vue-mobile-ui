<template>
  <div class="svg-icon">
    <card>
      <div class="demo">
        <h2>基本用法</h2>
        <div class="svgs">
          <pl-svg-icon :icon="item" v-for="(item, index) in svgIcons" :key="index" />
        </div>
      </div>
      <template v-slot:code>
        <highlight-code lang="vue">
          {{code1}}
        </highlight-code>
      </template>
    </card>
    <card>
      <div class="demo">
        <h2>自定义大小</h2>
        <div class="svgs">
          <pl-svg-icon icon="v_loading" size="32" />
        </div>
      </div>
      <template v-slot:code>
        <highlight-code lang="vue">
          {{code2}}
        </highlight-code>
      </template>
    </card>
    <card>
      <div class="demo">
        <h2>自定义动画</h2>
        <div class="svgs">
          <pl-svg-icon icon="v_loading" size="32" animation animation-name="v-loading" />
        </div>
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
import svgIcons from '../../../src/views/js/svg-icons'

export default {
  name: 'svg-icon',
  data () {
    return {
      svgIcons,
      code1: `<pl-svg-icon icon="done" />`,
      code2: `<pl-svg-icon icon="v_loading" size="32" />`,
      code3: `<pl-svg-icon icon="v_loading" size="32" animation animation-name="v-loading" />`
    }
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  margin: 10px;
  .svgs {
    background-color: rgb(73, 72, 72, 0.5);
    border-radius: 4px;
  }
}
</style>
