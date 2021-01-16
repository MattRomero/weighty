<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    data () {
      return {
        chartData: {
          labels: ["01 Enero",	"02 Enero",	"03 Enero",	"04 Enero",	"05 Enero",	"06 Enero",	"07 Enero", "08 Enero", "09 Enero", "Hoy"],
          datasets: [
            {
              label: 'Peso',
              data: [85,	80,	74,	80,	72,	83,	70,	65,	62, 50],
              fill: false,
              borderColor: '#53E0BF',
              backgroundColor: '#53E0BF',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>

<style>
</style>