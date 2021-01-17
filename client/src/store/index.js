import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id_token: null
  },
  mutations: {
    ID_TOKEN (state, idToken){
      state.id_token = idToken
    }
  },
  actions: {
    
  },
  modules: {}
});
