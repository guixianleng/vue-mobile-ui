<template>
  <div class="home">
    <van-nav-bar
      :title="$route.meta.title"
      :left-arrow="isShow"
      fixed
      @click-left="handleBack">
       <router-link target="_blank" :to="$route.meta.link" slot="right" v-if="isShow">
         <pl-svg-icon icon="edit" size="20" />
       </router-link>
    </van-nav-bar>
    <div class="divide"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { NavBar } from 'vant'

export default {
  name: 'home',
  components: {
    [NavBar.name]: NavBar
  },
  computed: {
    isShow () {
      if (this.$route.name === 'Welcome') {
        return false
      }
      return true
    }
  },
  methods: {
    handleBack () {
      history.back()
    }
  }
}
</script>

<style lang="less">
.divide {
  margin-top: 60px;
}
.demo {
  margin-bottom: 20px;
  h3 {
    font-weight: 500;
    font-size: 15px;
    margin: 10px 0;
  }
}
</style>
