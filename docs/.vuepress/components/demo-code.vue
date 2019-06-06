<template>
  <div class="pl-container">
    <div class="content-box">
      <slot v-if="$slots.default"></slot>  
    </div> 
  </div>
</template>

<script>

export default {
  name: 'demo-code'
}
</script>

<style lang="less">
.pl-container {
  background: url('../../static/images/iphone.png') no-repeat center top;
  padding: 90px 27px 0;
  height: 680px;
  background-size: contain;
  margin-top: 15px;
  .content-box {
    width: 320px;
    height: 575px;
    margin: 0 auto;
    overflow: hidden;
    overflow-y: auto;
    background: #F5F5F5;
  }
  h3 {
    margin: 10px;
    font-weight: 600;
    font-size: 15px;
  }
}
</style>
