<template>
  <div class="placeholder">
    <div class="demo">
      <h3>基本用法</h3>
      <pl-placeholder text-class="text-b_f" />
    </div>
    <div class="demo">
      <h3>自定义图标和文案</h3>
      <pl-placeholder icon="empty" message="没有更多了哦！" size="100" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'placeholder'
}
</script>

<style lang="less">
.placeholder {
  h3 {
    margin-left: 10px;
  }
  .text-b_f {
    position: relative;
    width: 100px;
    margin: 0 auto;
    font-size: 14px;
    color: #666;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 3px;
      background-color: #D8D8D8;
      border-radius: 2px;
    }
    &::before {
      left: -12px;
    }
    &::after {
      right: -12px;
    }
  }
}
</style>
