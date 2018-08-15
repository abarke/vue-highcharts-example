<template>
  <div>
    <h1 class="animated bounceInRight">{{ header }}</h1>
    <p class="animated bounceInRight">Chart goes here...</p>
  </div>
</template>

<script>
export default {
  name: 'ChartComponent',
  props: {
    header: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
