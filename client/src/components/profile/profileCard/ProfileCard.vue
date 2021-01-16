<template>
  <div class="profile__card">
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
.profile__card {
    background-color: #fff;
    border-radius: 1.25rem;
    padding: 1.5rem 3.3rem;
}
.profile__card .card-top,
.profile__card .card-bottom {
  padding-top: 2.2rem;
}
.profile__card h2 {
  color: #48BCA1;
  font-size: 2.7rem;
  font-weight: 400;
}

.profile__card p {
  font-weight: 300;
}
.profile__card h3 {
  font-weight: 900;
}
.profile__card h3 span {
  font-size: 1rem;
  font-weight: 400;
}
.profile__card .profile__card-btn {
  background-color: #53E0BF;
  border: none;
  padding: 0.3rem 3rem;
  border-radius: 0.5rem;
  width: 100%;
  
}

</style>