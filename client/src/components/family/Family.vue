<template>
    <b-container>
        <b-row>
            <b-col class="col-12 col-md-6 col-lg-4 mt-4">
                <button class="add-btn" v-b-modal="'add-modal'">
                    <img src="../../assets/add.svg" class="pt-3" alt="add-icon" srcset=""/>
                </button>
            </b-col>
            <b-col v-for="member in familyMembers" :key="member.id" class="col-12 col-md-4 mt-4">
                <FamilyCard :profileInfo="member"/>
            </b-col>
        </b-row>
        <b-modal id="add-modal" hide-footer>
            <template #modal-title>
                <h3>Agregar familar</h3>
            </template>
            <b-form v-on:submit.prevent="addFamilyMember">
            <b-row>
                <b-col cols=8 class='mx-auto'>
                    <b-form-group class='mx-auto' id="input-group-2" label="Nombre:" label-for="input-1">
                    <b-form-input
                    id="input-1"
                    v-model="form.name"
                    ></b-form-input>
                    </b-form-group>
                    <b-form-group class='mx-auto' id="input-group-2" label="Peso:" label-for="input-2">
                    <b-form-input
                    type="number"
                    id="input-2"
                    v-model="form.weight"
                    ></b-form-input>
                    </b-form-group>
                <b-button @click="$bvModal.hide('add-modal')" type="submit" class='weighty-card__btn'>Agregar</b-button>
                </b-col>
            </b-row>
            </b-form>
        </b-modal>
    </b-container>
</template>

<script>
import FamilyCard from './FamilyCard'

export default {
    name: "Family",
    props: {

    },
    components: {
        FamilyCard,
    },
    methods: {
        addFamilyMember(){
            this.familyMembers.unshift(this.form)
            this.form = {}
        }
    },
    data(){
        return {
            form: {
                weigth: '',
                name: ''
            },
            familyMembers: [
                {id: 1, name: 'Eduardo', weight: 49, idealWeight: 62,  goal: 'Subir de peso'},
                {id: 2, name: 'Mamá', weight: 69, idealWeight: 62,  goal: 'Adelgazar'},
                {id: 3, name: 'Papá', weight: 69, idealWeight: 62,  goal: 'Tonificar'},
            ]
        }
    }
}
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