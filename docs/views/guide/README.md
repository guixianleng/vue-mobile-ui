# 组件库
## 介绍
## 安装

```js
 npm install -D pl-ui
```
## 快速上手

```vue
<template>
  <div class="step">
    <pl-step :active="active" active-text-color="#313131">
      <pl-steps>预约成功</pl-steps>
      <pl-steps>预约专家</pl-steps>
      <pl-steps>正在服务</pl-steps>
      <pl-steps>完成服务</pl-steps>
    </pl-step>
  </div>
</template>

<script>

export default {
  name: 'step',
  data () {
    return {
      active: 0
    }
  }
}
</script>
```