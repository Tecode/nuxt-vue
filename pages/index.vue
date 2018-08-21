<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-vue
      </h1>
      <h2 class="subtitle">
        Vue+Vuex服务端渲染模板
      </h2>
      <div class="links">
      <router-link class="button--grey" to="/child">子页面(router-link跳转)</router-link>
      &nbsp;
      <a class="button--green" @click="link">子页面($router.push跳转)</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  methods: {
    link() {
      this.$router.push('/child')
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

