import Vue from "vue";
import Vuex from "vuex";
import router from '../router/index';
import { getLogin } from '../api/axios'
import { getProfile } from '../api/axios'
import { postProfile } from '../api/axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id_token: null,
    card_user: {
      user: null,
      date: null,
      weight: null,
      height: null,
      selected_radio: null,
      selected_select: null,
    },
    profile: {
      name: "",
      weightTarget: 0,
      height: 0,
      objective: ""
    }
  },
  mutations: {
    ID_TOKEN(state, idToken) {
      state.id_token = idToken
    },
    DATA_PROFILE(state, data){
      state.profile = data
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
    actionProfile(context) {
      const GetProfile = getProfile()
      GetProfile.then(res => {
        context.commit('DATA_PROFILE', res.data.message)
        res.data.message === "record-not-found" ? router.push('/user-card') : router.push('/profile')
      }).catch(err => {
        console.log(err)
      })
    },
    actionPostProfile(state) {
      let cardUser = state.state.card_user
      const PostProfile = postProfile(cardUser.user, cardUser.date, cardUser.weight, cardUser.height, cardUser.selected_radio, cardUser.selected_select)
      PostProfile.then(res => {
        res.message == 'record-created' ? router.push('profile') : false
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {}
});
