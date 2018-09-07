<template>
  <div class="charts">
    <h1 class="animated bounceInRight">Bitcoin Price Index History</h1>
    
    <div class="loading animated bounceInRight" v-if="loading">
      <p>Loading...</p>
    </div>
    
    <div class="error animated bounceInRight" v-else-if="hickup">
      <p>Error accessing the API: {{ error.message }}</p>
      <p v-if="error.response">Response: {{ error.response }}</p>
    </div>
    
    <div class="animated bounceInRight" v-else>
      <LineHighCharts :data="chartData" :options="chartOptions"/>
      <p class="updated">Updated: {{ updated }}</p>
      <p class="box disclaimer">{{ disclaimer }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LineHighCharts from '@/components/LineHighCharts.vue'
import axios from 'axios'
import _ from 'lodash'

export default {
  
  name: 'HighChartLineChart',
  
  components: {
    LineHighCharts
  },
  
  methods: {
    getData() {
      axios
      .get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(response => {
        this.chartData.labels = _.keys(response.data.bpi);
        this.chartData.datasets[0].data = _.values(response.data.bpi);
        this.updated = response.data.time.updated;
        this.disclaimer = response.data.disclaimer;
      })
      .catch(error => {
        this.hickup = true,
        this.error = error
      })
      .finally(() => this.loading = false)
    }
  },

  data() {
    return {
      loading: true,
      updated: null,
      hickup: false,
      error: null,
      chartData: {
        labels: this.labels,
        datasets: [
          {
            label: 'Bitcoin (BTC/USD)',
            backgroundColor: '#f7931a',
            borderColor: '#f7931a',
            fill: false,
            data: null
          }
        ]
      },
      chartOptions: {
        responsive: true, 
        maintainAspectRatio: false,
        tooltips: {
          enabled: true
        }
      },
    }
  },

  mounted() {
    this.getData();
  }

}
</script>