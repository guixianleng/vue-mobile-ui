<template>
  <div class="card">
    <div class="card-content">
      <slot></slot>
      <div>
        <div v-if="codeVisible">
          <slot name="code"></slot>
        </div>
      </div>
    </div>
    <div class="card-operation" @click="toggle">{{msg}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      codeVisible: false,
      msg: '显示代码'
    };
  },
  methods: {
    toggle() {
      this.codeVisible = !this.codeVisible
      this.msg = this.codeVisible ? '隐藏代码' : '显示代码'
    }
  }
};
</script>
<style lang="less">
.card {
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 #ccc;
  margin-bottom: 10px;
  margin-top: 15px;
  h2 {
    font-size: 18px;
  }
  .card-content {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .card-operation {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  pre {
    // background-color: #f5f5f5;
    code {
      font-size: 14px;
    }
  }
}
</style>