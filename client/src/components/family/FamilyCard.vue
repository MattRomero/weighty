<template>
  <div class="weighty-card family__card">
    <h2>{{ profileInfo.name }}</h2>
    <div class="card-top">
      <h3>{{ profileInfo.weightTarget }} <span>Kg</span></h3>
      <p>Peso deseado</p>
    </div>
    <div class="card-bottom">
      <router-link
        :to="{ name: 'FamilyDetails', params: { memberId: profileInfo.id } }"
      >
        <b-button v-b-modal="'edit-modal'" class="family__card-btn" @click="nextToTrackingProfile(profileInfo.id)"
          >Ver detalles</b-button
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "FamilyCard",
  data() {
    return {
      form: {
        weigth: null
      }
    };
  },
  props: {
    profileInfo: {
      type: Object
    }
  },
  methods: {
    updateWeight() {
      console.log(`${this.form.weight} es tu nuevo peso`);
    },
  nextToTrackingProfile(id){
    this.$store.commit('SELECTED_TRACKING_PROFILE', id)
    this.$store.dispatch('actionGetTrackingID')
  }
  },
  computed: {
    ...mapState(['tracking'])
  }
};
</script>

<style scoped>
@import "./FamilyCard.css";
</style>
