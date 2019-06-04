<template>
  <div class="pl-container">
    <div class="content-box">
      <slot name="code"></slot>  
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
  padding-top: 90px;
  height: 680px;
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
@media screen and (max-width: 420px) {
  .pl-container {
    background-size: contain;
  }
}
</style>
