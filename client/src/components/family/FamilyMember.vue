<template>
  <b-container>
    <b-row class="d-flex justify-content-center">
      <b-col class="col-12 col-md-8 col-lg-4">
        <ProfileCard :profileInfo="profile" />
      </b-col>
      <b-col class="weighty-card col-12 col-md-8 mgt-1">
        <h2>Progreso de {{ profile.name }}</h2>
        <LineChart :chartData="chartData"></LineChart>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ProfileCard from "../profile/profileCard/ProfileCard";
import LineChart from "../Charts/LineChart";
import { mapState } from 'vuex';

export default {
  name: "FamilyMember",
  components: {
    ProfileCard,
    LineChart
  },
  data() {
    return {
      chartData: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: [
          "01 Enero",
          "02 Enero",
          "03 Enero",
          "04 Enero",
          "05 Enero",
          "06 Enero",
          "07 Enero",
          "08 Enero",
          "09 Enero",
          "Hoy"
        ],
        datasets: [
          {
            label: "Peso",
            data: [85, 50, 74, 80, 72, 83, 70, 65, 62, 50],
            fill: false,
            borderColor: "#53E0BF",
            backgroundColor: "#53E0BF",
            borderWidth: 1
          },
          {
            label: "IMC",
            data: [23, 30, 20, 30, 30, 54, 54, 23, 12, 43],
            fill: false,
            borderColor: "#56cfe1",
            backgroundColor: "#56cfe1",
            borderWidth: 1
          }
        ]
      };
    }
  },
  computed:{
    ...mapState(['profile'])
  }
};
</script>

<style scoped></style>
