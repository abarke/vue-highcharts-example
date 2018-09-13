<script>
  import {Line} from 'vue-chartjs';

  export default {
    name: 'LineChartJsComponent',
    extends: Line,
    props: ['data', 'options'],
    mounted() {
      this.renderChart(this.data, this.options);
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
