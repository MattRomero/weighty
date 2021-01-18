<template>
  <b-container>
    <b-row>
      <b-col class="col-12 col-md-6 col-lg-4 mt-5 p-5">
        <button class="add-btn" v-b-modal="'add-modal'">
          <img
            src="../../assets/add.svg"
            class="pt-3"
            alt="add-icon"
            srcset=""
          />
        </button>
      </b-col>
      <b-col
        v-for="member in tracking"
        :key="member.id"
        class="col-12 col-md-4 mt-4"
      >
        <FamilyCard :profileInfo="member" />
      </b-col>
    </b-row>
    <b-modal id="add-modal" hide-footer>
      <template #modal-title>
        <h3>Agregar familar</h3>
      </template>
      <b-form v-on:submit.prevent="addFamilyMember">
        <b-row>
          <b-col cols="8" class="mx-auto">
            <b-form-group
              class="mx-auto"
              id="input-group-2"
              label="Nombre:"
              label-for="input-1"
            >
              <b-form-input id="input-1" v-model="trackingMember.name"></b-form-input>
            </b-form-group>
           <b-form-group label="Sexo:">
                  <b-form-radio-group
                    id="radio-group-1"
                    v-model="trackingMember.sex"
                    :options="sex"
                    name="radio-options"
                  ></b-form-radio-group>
            </b-form-group>
            <b-form-group label="Objetivo:" size="md" class="mb-3">
                  <b-form-select
                    v-model="trackingMember.objective"
                    :options="objective"
                  ></b-form-select>
            </b-form-group>
             <b-form-group
              class="mx-auto"
              label="Peso deseado:"
            >
              <b-form-input id="input-1" type="number" v-model="trackingMember.weightTarget"></b-form-input>
            </b-form-group>
             <b-form-group
              class="mx-auto"
              id="input-group-2"
              label="Altura:"
              label-for="input-1"
            >
              <b-form-input id="input-1" type="number" v-model="trackingMember.height"></b-form-input>
            </b-form-group>
            <b-button
              @click="$bvModal.hide('add-modal')"
              type="submit"
              class="weighty-card__btn"
              >Agregar</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </b-container>
</template>

<script>
import FamilyCard from "./FamilyCard";
import { mapState } from "vuex";

export default {
  name: "Family",
  props: {},
  components: {
    FamilyCard
  },
  data() {
    return {
      objective: [
        { value: 1, text: "Bajar de peso" },
        { value: 2, text: "Subir de peso" },
        { value: 3, text: "Quemar grasa" },
        { value: 4, text: "Tonificar" },
      ],
      sex: [
        { text: "Hombre", value: 1 },
        { text: "Mujer", value: 2 },
      ]
    };
  },
  methods: {
    addFamilyMember() {
      this.$store.dispatch("actionPostTracking");

    },
    getTracking(){
      this.$store.dispatch("actionGetTracking")
    }
  },
  computed: {
    ...mapState(["trackingMember", "tracking"]),

  },
  mounted() {
        this.getTracking()
  },
};
</script>

<style>
body {
  background: #f1f4fa;
}

button.add-btn {
  background: none;
  border: 0;
  outline: none;
}
.weighty-card__btn {
  background-color: #53e0bf;
  border: none;
  padding: 0.3rem 3rem;
  border-radius: 0.5rem;
  width: 100%;
}
.weighty-card__btn:hover,
.weighty-card__btn:focus {
  background-color: #48bca1;
}
</style>
