<template>
<b-container>
    <b-row>
        <b-col class="col-md-4 col-12">
            <ProfileCard :profileInfo="person"/>
        </b-col>
        <b-col class="weighty-card">
            <h2>Mi progreso</h2>
            <LineChart :chartData="chartData"></LineChart>
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
        this.fillData();
    },
    methods: {
        fillData() {
            this.chartData = {
                labels: ["01 Enero","02 Enero",	"03 Enero",	"04 Enero",	"05 Enero",	"06 Enero",	"07 Enero", "08 Enero", "09 Enero", "Hoy"],
          datasets: [
            {
              label: 'Peso',
              data: [85, 50, 74, 80, 72, 83, 70, 65, 62, 50],
              fill: false,
              borderColor: '#53E0BF',
              backgroundColor: '#53E0BF',
              borderWidth: 1
            },
            {
              label: 'IMC',
              data: [23, 30, 20, 30, 30, 54, 54,23, 12, 43],
              fill: false,
              borderColor: '#56cfe1',
              backgroundColor: '#56cfe1',
              borderWidth: 1
            }
          ]
            }
        }
        
}
}
</script>

<style scoped>
@import './Profile.css';
</style>
