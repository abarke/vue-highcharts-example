<template>
  <div id="overview">

    <h1 class="animated bounceInLeft">Bitcoin Price Index</h1>

    <div class="box loading" v-if="loading">
      <p>Loading...</p>
    </div>

    <div class="box error" v-else-if="showError">
      <p class="big">🙁</p>
      <p>Error accessing the API: {{ error.message }}</p>
      <p v-if="error.response">Response: {{ error.response }}</p>
    </div>

    <div class="box animated bounceInLeft" v-else>

      <div v-for="currency in currencies" :key="currency.code">

        <span>{{ currency.description }} ({{ currency.code }}):</span>

        <span class="highlight right">
          <span v-html="currency.symbol"></span>{{ currency['rate_float'] | currencydecimal }}
        </span>
      </div>
    </div>

    <div class="updated animated bounceInLeft" v-if="!showError">Updated: {{ updated }}</div>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Overview',
    data() {
      return {
        currencies: null,
        updated: null,
        loading: true,
        showError: false,
        error: null,
      };
    },
    mounted() {
      /**
       * Get data method uses axios to get data via a HTTP API Endpoint
       */
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json') // HTTP GET Request
        .then(response => {
          this.currencies = response.data['bpi'];
          this.updated    = response.data.time.updated;
        })
        .catch(error => { // Executes if an error occurs if code is not >= 200 && < 300
          this.showError = true;
          this.error     = error;
        })
        .finally(() => this.loading = false); // Always occurs even if there is an error
    },
    filters: {
      currencydecimal(value) {
        return value.toFixed(2);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
