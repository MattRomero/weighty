import Vue from "vue";
import Vuex from "vuex";
import router from '../router/index';
import { getLogin } from '../api/axios'
import { getProfile } from '../api/axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id_token: null
  },
  mutations: {
    ID_TOKEN(state, idToken) {
      state.id_token = idToken
    }
  },
  actions: {
    actionLogin({ state, dispatch }) {
      const GetLogin = getLogin(state.id_token)
      GetLogin.then(res => {
        res.status == 200 ? dispatch('actionProfile') : false
      }).catch(err => {
        console.log(err)
      })
    },
    actionProfile() {
      const GetProfile = getProfile()
      GetProfile.then(res => {
        res.message == "record-not-found" ? router.push('/user-card'): router.push('/profile')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {}
});
