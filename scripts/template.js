/**
 * 将驼峰命名转为中横杠例如：PlInputGroup --> pl-input-group
 * @param str
 */
function toMiddleLine (str) {
  let temp = str.replace(/[A-Z]/g,
    function (match) {
      return '-' + match.toLowerCase()
    })
  if (temp.slice(0, 1) === '-') { // 如果首字母是大写，执行replace时会多一个-，这里需要去掉
    temp = temp.slice(1)
  }
  return temp
}

module.exports = {
  vueTemplate: componentName => {
    return `<template>
  <div class="${toMiddleLine(componentName)}">
    ${toMiddleLine(componentName)}
  </div>
</template>

<script>

export default {
  name: '${toMiddleLine(componentName)}'
}
</script>

<style lang="less" scoped>
// @import './style.less';
.${toMiddleLine(componentName)} {}
</style>
`
  },
  styleTemplate: componentName => {
    return `.${toMiddleLine(componentName)} {}`
  },
  entryTemplate: `import Main from './main.vue'
export default Main
`
}
