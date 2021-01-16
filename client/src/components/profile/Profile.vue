<template>
<b-container>
    <b-row>
        <b-col class="col-md-4 col-12">
            <ProfileCard :profileInfo="person"/>
        </b-col>
        <b-col class="weighty-card">
            <h2>Mi progreso</h2>
            <LineChart/>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import ProfileCard from './profileCard/ProfileCard';
import LineChart from '../Charts/LineChart';

export default {
    name: 'Profile',
    components: {
        ProfileCard,
        LineChart
    },
    data(){
        return {
            person: {name: 'Héctor', weight: 69, idealWeight: 62,  goal: 'Tonificar'},
            chartData: null
      }
    },
    mounted() {
    },
    methods: {
}
}
</script>

<style scoped>
@import './Profile.css'
</style>
