import Vue from "vue";
import Vuex from "vuex";
import router from '../router/index';
import { getLogin } from '../api/axios'
import { getProfile } from '../api/axios'
import { postProfile } from '../api/axios'
import { getTracking } from '../api/axios'
import { postTracking } from '../api/axios'

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
    },
    tracking: [],
    trackingMember: {
      name: '',
      objective: null,
      weightTarget: null,
      sex: null,
      height: null
    }
  },
  mutations: {
    ID_TOKEN(state, idToken) {
      state.id_token = idToken
    },
    DATA_PROFILE(state, data) {
      state.profile = data
    },
    DATA_TRACKING(state, data) {
      state.tracking = data
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
    },
    actionGetTracking(context) {
      const GetTracking = getTracking()
      GetTracking.then(res => {
        context.commit('DATA_TRACKING', res.data.message)
      }).catch(err => {
        console.log(err)
      })
    },
    actionPostTracking({ state, dispatch }) {
      let trackingMember = state.trackingMember
      const PostTracking = postTracking(trackingMember.name, trackingMember.objective, trackingMember.weightTarget, trackingMember.sex, trackingMember.height)
      PostTracking.then(res => {
        res.data.message === 'tracking-created' ? dispatch('actionGetTracking') : false
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {}
});
