<template>
  <div class="background-line-diagonal pt-5">
    <b-row class="m-0">
      <b-col class="col-12 col-md-4 mx-auto">
        <b-card class="text-center">
          <b-row>
            <b-col cols="8" class="mx-auto">
              <h1 class="mb-5">Ingreso Ficha</h1>
              <div class="text-left">
                <label>Nombre</label>
                <b-input-group size="md" class="mb-3">
                  <b-form-input
                    v-model="card_user.user"
                    type="text"
                  ></b-form-input>
                </b-input-group>
              </div>
              <div class="text-left">
                <label>Fecha de nacimiento</label>
                <b-input-group size="md" class="mb-3">
                  <b-form-input
                    type="date"
                    v-model="card_user.date"
                  ></b-form-input>
                </b-input-group>
              </div>
              <div class="text-left">
                <label>Sexo</label>
                <b-form-group>
                  <b-form-radio-group
                    id="radio-group-1"
                    v-model="card_user.selected_radio"
                    :options="options_radio"
                    name="radio-options"
                  ></b-form-radio-group>
                </b-form-group>
              </div>
              <div class="text-left">
                <label>Peso deseado</label>
                <b-input-group size="md" class="mb-3">
                  <b-form-input
                    type="number"
                    v-model="card_user.weight"
                  ></b-form-input>
                </b-input-group>
              </div>
              <div class="text-left">
                <label>Altura</label>
                <b-input-group size="md" class="mb-3">
                  <b-form-input
                    type="number"
                    v-model="card_user.height"
                  ></b-form-input>
                </b-input-group>
              </div>
              <div class="text-left">
                <label>Objetivo</label>
                <b-input-group size="md" class="mb-3">
                  <b-form-select
                    v-model="card_user.selected_select"
                    :options="options_select"
                  ></b-form-select>
                </b-input-group>
              </div>

              <b-button block class="button mb-5" @click="nextToStep"
                >Guardar</b-button
              >
            </b-col>
          </b-row>
        </b-card>
      </b-col> </b-row
    ><br />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { required, minLength, between } from "vuelidate/lib/validators";
export default {
  name: "UserCard",
  data() {
    return {
      options_radio: [
        { text: "Hombre", value: 1 },
        { text: "Mujer", value: 2 },
      ],
      options_select: [
        { value: 1, text: "Bajar de peso" },
        { value: 2, text: "Subir de peso" },
        { value: 3, text: "Quemar grasa" },
        { value: 4, text: "Tonificar" },
      ],
    };
  },
  validations: {
    user: {
      required,
      minLength: minLength(4),
    },
    date: {
      required,
    },
    height:{
      required,
      between: between(20, 100)
    }
  },
  methods: {
    nextToStep() {
      this.$store.dispatch("actionPostProfile");
    },
  },
  computed: {
    ...mapState(["card_user"]),
  },
};
</script>

<style scoped>
.background-line-diagonal {
  background-image: -webkit-linear-gradient(-109deg, white 50%, #53e0bf 50%);
  height: 150vh;
}
.button {
  background-color: #53e0bf;
  border-color: #53e0bf;
}
</style>
