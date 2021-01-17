<template>
  <div class="weighty-card family__card">
    <h2>{{ profileInfo.name }}</h2>
    <div class="card-top">
      <h3>{{profileInfo.weight}} <span>Kg</span></h3>
      <p>Peso actual</p>
    </div>
    <div class="card-bottom">
      <router-link :to="{ name: 'FamilyDetails', params: { memberId: profileInfo.id }}">
              <b-button v-b-modal="'edit-modal'" class='family__card-btn'>Ver detalles</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: "FamilyCard",
    data(){
      return {
        form: {
          weigth: null
        }
      }
    },
    props: {
    profileInfo: {
      type: Object
    }
  },
  methods: {
    updateWeight(){
      console.log(`${this.form.weight} es tu nuevo peso`)
    }
  }
}
</script>

<style scoped>
@import './FamilyCard.css';
</style>