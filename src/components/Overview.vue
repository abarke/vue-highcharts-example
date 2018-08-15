<template>
  
  <div id="overview">
    
    <h1 class="animated bounceInLeft">Bitcoin Price Index</h1>

    <div class="currencies loading" v-if="loading">
      <p>Loading...</p>
    </div>
    
    <div class="currencies error" v-else-if="errored">
      <p>Error accessing the API: {{ error.message }}</p>
      <p v-if="error.response">Response: {{ error.response }}</p>
    </div>
    
    <div class="currencies animated bounceInLeft" v-else>
      
      <div v-for="currency in currencies" :key="currency.code">
        
        <span>{{ currency.description }} ({{currency.code}}):</span>
        
        <span class="lighten">
          <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
        </span>

      </div>

    </div>

    <div class="updated animated bounceInLeft">Updated: {{ updated }}</div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Overview',
  data () {
    return {
      currencies: null,
      updated: null,
      loading: true,
      errored: false,
      error: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.currencies = response.data.bpi;
        this.updated = response.data.time.updated
      })
      .catch(error => {
        console.log(error)
        this.errored = true,
        this.error = error
      })
      .finally(() => this.loading = false)
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.currencies {
  width: 310px;
  padding: 1.6em;
  background: rgb(233, 233, 233);
  border-radius: 6px;
  color: rgb(66, 66, 66);
  margin: 0 auto;
  text-align: left;
  line-height: 1.6em;
}
.lighten {
  color: #41b883;
  float: right;
}
.updated {
  line-height: 2em;
  color: #35495e;
}
.loading{
  color: #41b883;
  background: none;
  text-align: center;
}
.error {
  color: red;
}
</style>
