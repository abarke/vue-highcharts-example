<template>
  <div class="home">
    <Overview/>
  </div>
</template>

<script>
// @ is an alias to /src
import Overview from '@/components/Overview.vue'

export default {
  name: 'home',
  components: {
    Overview
  }
}
</script>
