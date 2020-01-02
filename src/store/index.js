import Vuex from 'vuex';
import Vue from 'vue';
import pub from './public'
import release from 'views/release/release'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        pub,
        release
    }
})

export default store;