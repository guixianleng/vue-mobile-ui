<template>
  <div class="welcome">
    <pl-placeholder text="移动端vue组件库" icon="logo" size="64"/>
    <div class="welcome-content">
      <pl-cell-item
        v-for="(item, index) in pageLists"
        :key="index"
        :title="item.meta.title"
        is-link
        :to="item.path">
        <pl-svg-icon :icon="item.meta.icon" size="24" slot="right" />
      </pl-cell-item>
    </div>
  </div>
</template>

<script>

export default {
  name: 'welcome',
  components: {},
  data () {
    return {
      pageLists: []
    }
  },
  mounted () {
    this.handleGetList()
  },
  methods: {
    handleGetList () {
      const IndexRoute = {
        path: '/',
        children: []
      }
      let routes = [
        IndexRoute
      ]
      const routerContext = require.context('../../router/modules', true, /\.js$/)
      routerContext.keys().forEach(route => {
        const routerModule = routerContext(route)
        /**
        * 兼容 import export 和 require module.export 两种规范
        */
        IndexRoute.children = [...IndexRoute.children, ...(routerModule.default || routerModule)]
      })
      routes[0].children.filter(item => {
        if (item.path.includes(':id')) {
          const newPath = item.path.split(':')[0]
          item.path = newPath + 5
        }
      })
      this.pageLists = routes[0].children
    }
  }
}
</script>

<style lang="less" scoped>
.welcome {
  .pl-placeholder {
    margin-top: 20px;
  }
  .pl-cell-item {
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  &-content {
    margin: 0 10px
  }
}
</style>
