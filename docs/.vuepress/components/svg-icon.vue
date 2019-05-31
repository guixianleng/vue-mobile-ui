<template>
  <div class="svg-icon">
    <div class="demo">
      <h3>基本用法</h3>
      <div class="svgs">
        <pl-svg-icon :icon="item" v-for="(item, index) in svgIcons" :key="index" />
      </div>
    </div>
    <div class="demo">
      <h3>自定义大小</h3>
      <div class="svgs">
        <pl-svg-icon icon="empty" size="64"></pl-svg-icon>
        <pl-svg-icon icon="loading" size="64"></pl-svg-icon>
        <pl-svg-icon icon="v_loading" size="32"></pl-svg-icon>
        <pl-svg-icon icon="success" size="48"></pl-svg-icon>
        <pl-svg-icon icon="fail" size="48"></pl-svg-icon>
      </div>
    </div>
    <div class="demo">
      <h3>自定义动画</h3>
      <div class="svgs">
        <pl-svg-icon icon="v_loading" size="32" animation animation-name="v-loading"></pl-svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import plSvgIcon from '../../../src/components/global/plSvgIcon'
import svgIcons from '../../../src/views/js/svg-icons'

export default {
  name: 'svg-icon',
  components: {
    'pl-svg-icon': plSvgIcon
  },
  data () {
    return {
      svgIcons
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
