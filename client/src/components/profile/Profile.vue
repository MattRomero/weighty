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
        this.fillData();
    },
    methods: {
        fillData() {
          this.chartData = {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ],
            datasets: [
              {
                label: "GitHub Commits",
                backgroundColor: "#f87979",
                data: [70, 20, 12, 39, 100, 40, 95, 80, 80, 20, 12, 101]
              },
              {
                label: "Monthly incomes",
                backgroundColor: "#A5CC82",
                data: [205, 408, 188, 190, 58, 200, 190, 400, 164, 254, 290, 201]
              }
            ]
          };
    }  
}
}
</script>

<style scoped>
@import './Profile.css'
</style>
