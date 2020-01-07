import Vuex from 'vuex';
import Vue from 'vue';
import pub from './public'
import release from 'views/release/release'
import search from 'views/search/search'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        pub,
        release,
        search
    }
})

export default store;