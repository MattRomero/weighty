<template>
  <div class="weighty-card profile__card">
    <h2>{{ profileInfo.name }}</h2>
    <div class="card-top">
      <h3>{{profileInfo.weight}} <span>Kg</span></h3>
      <p>Peso actual</p>
      <b-button v-b-modal="'update-modal'" class='profile__card-btn'>Actualizar</b-button>
    </div>
    <div class="card-bottom">
      <h3>{{profileInfo.idealWeight}} <span>Kg</span></h3>
      <p>Peso Meta</p>
      <h4>{{profileInfo.goal}}</h4>
      <p>Objetivo</p>
      <b-button v-b-modal="'edit-modal'" class='profile__card-btn'>Editar</b-button>
    </div>
    <!--- Modals start -->
  <b-modal id="update-modal" hide-footer>
    <template #modal-title>
        <h3>Actualizar peso</h3>
    </template>
    <b-form-input type="number"></b-form-input>
  </b-modal>
  <b-modal id="edit-modal" hide-footer>
    <template #modal-title>
        <h3>Editar datos</h3>
    </template>
    <b-form-input type="number"></b-form-input>
  </b-modal>
      <!--- Modals end -->
  </div>
</template>

<script>
export default {
    name: "ProfileCard",
    props: {
    profileInfo: {
      type: Object
    },
  },
}
</script>

<style scoped>
@import './ProfileCard.css';
</style>