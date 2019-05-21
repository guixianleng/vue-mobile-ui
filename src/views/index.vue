<template>
  <div class="home">
    <van-nav-bar
      :title="$route.meta.title"
      :left-arrow="isShow"
      @click-left="handleBack">
       <router-link target="_blank" :to="$route.meta.link" slot="right" v-if="isShow">
         <pl-svg-icon icon="edit" size="20" />
       </router-link>
    </van-nav-bar>
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

<style>

</style>
