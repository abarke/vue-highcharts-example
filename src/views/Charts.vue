<template>
  <div class="charts">
    <Chart header="Bitcoin Price Chart"/>
    <Chart header="Bitcoin Historical Price Chart"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Chart from '@/components/Chart.vue'

export default {
  name: 'home',
  components: {
    Chart
  }
}
</script>