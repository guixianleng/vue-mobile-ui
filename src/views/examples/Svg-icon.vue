<template>
  <div class="svg-icon">
    <div class="demo">
      <h3>基本用法</h3>
      <div class="svgs">
        <pl-svg-icon icon="done"></pl-svg-icon>
        <pl-svg-icon icon="refresh"></pl-svg-icon>
        <pl-svg-icon icon="disconnect"></pl-svg-icon>
        <pl-svg-icon icon="tel"></pl-svg-icon>
        <pl-svg-icon icon="coin"></pl-svg-icon>
        <pl-svg-icon icon="score"></pl-svg-icon>
        <pl-svg-icon icon="doubt"></pl-svg-icon>
        <pl-svg-icon icon="dot-circle"></pl-svg-icon>
        <pl-svg-icon icon="edit"></pl-svg-icon>
        <pl-svg-icon icon="arrow_d"></pl-svg-icon>
        <pl-svg-icon icon="arrow_u"></pl-svg-icon>
        <pl-svg-icon icon="times"></pl-svg-icon>
        <pl-svg-icon icon="week"></pl-svg-icon>
        <pl-svg-icon icon="month"></pl-svg-icon>
        <pl-svg-icon icon="more"></pl-svg-icon>
        <pl-svg-icon icon="collapse"></pl-svg-icon>
        <pl-svg-icon icon="step"></pl-svg-icon>
        <pl-svg-icon icon="cell"></pl-svg-icon>
        <pl-svg-icon icon="svg"></pl-svg-icon>
        <pl-svg-icon icon="dot"></pl-svg-icon>
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

export default {
  name: 'svg-icon'
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
