<template>
    <div class="content">
        <p>子页面 {{ said }}</p>
        <div>{{childData}}</div>
        <nuxt-link to="/" class="home">返回首页</nuxt-link>
    </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      said: "Hello world"
    };
  },
  computed: {
    ...mapState({
      childData: state => state.childStore.name
    })
  }
};
</script>
<style lang="scss" scoped>
.content {
  text-align: center;
  p {
    font-size: 20px;
    margin-top: 10%;
  }
  .home {
    font-size: 16px;
    color: #4c4c4c;
    text-decoration: none;
    &:hover {
      color: #4c4c4c;
    }
  }
}
</style>