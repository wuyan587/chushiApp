import Vuex from 'vuex';
import Vue from 'vue';
import release from 'views/release/release'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        release
    }
})

export default store;