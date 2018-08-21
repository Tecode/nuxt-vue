import Vue from 'vue';
import Vuex from 'vuex';
import childStore from './modules/childStore';;

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: { childStore }
})

export default store;