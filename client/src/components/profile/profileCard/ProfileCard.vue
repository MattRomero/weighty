<template>
  <div class="weighty-card profile__card">
    <h2>{{ profileInfo.name }}</h2>
    <div class="card-top">
      <h3>{{ profileInfo.height }} <span>Kg</span></h3>
      <p>Peso actual</p>
      <b-button v-b-modal="'update-modal'" class="profile__card-btn"
        >Actualizar</b-button
      >
    </div>
    <div class="card-bottom">
      <h3>{{ profileInfo.weightTarget }} <span>Kg</span></h3>
      <p>Peso Meta</p>
      <h4>{{ getObjective(profileInfo.objective) }}</h4>
      <p>Objetivo</p>
      <b-button v-b-modal="'edit-modal'" class="profile__card-btn"
        >Editar</b-button
      >
    </div>
    <!--- Modals start -->
    <b-modal id="update-modal" hide-footer>
      <template #modal-title>
        <h3>Actualizar peso</h3>
      </template>
      <b-form v-on:submit.prevent="updateWeight">
        <b-row>
          <b-col cols="8" class="mx-auto">
            <b-form-group
              class="mx-auto"
              id="input-group-2"
              label="Peso actual:"
              label-for="input-2"
            >
              <b-form-input id="input-2" v-model="form.weight"></b-form-input>
            </b-form-group>
            <b-button
              @click="$bvModal.hide('update-modal')"
              type="submit"
              class="profile__card-btn"
              >Actualizar</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </b-modal>

    <b-modal id="edit-modal" hide-footer>
      <template #modal-title>
        <h3>Editar datos</h3>
      </template>
      <b-form-input type="number"></b-form-input>
      <b-button class="profile__card-btn">Editar</b-button>
    </b-modal>
    <!--- Modals end -->
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
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
    getObjective(objective) {
    const conversion = {
      1: 'Bajar de peso',
      2: 'Subir de peso',
      3: 'Quemar grasa',
      4: 'Tonificar',
    }
    return conversion[objective]
  }
  }
};
</script>

<style scoped>
@import "./ProfileCard.css";
</style>
