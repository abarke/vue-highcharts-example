<template>
  <div id="app">
    <img id="logo" class="animated bounceInDown" alt="Logo" src="./assets/logo.svg">
    <div id="nav" class="animated zoomIn">

      <!-- Page Navigation -->

      <router-link to="/">Overview</router-link>
      |
      <router-link to="/chartjs">Chart.js</router-link>
      |
      <router-link to="/highcharts">HighCharts</router-link>

    </div>

    <router-view><!-- Selected route is rendered here! --></router-view>

  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #logo {
    width: 380px;
    margin: 3em;
  }

  #nav {
    margin-bottom: 3em
  }

  a {
    text-decoration-line: none;
    color: #41b883;
  }

  h1 {
    color: #35495e
  }

  .box {
    width: 360px;
    padding: 1.6em;
    background: rgb(233, 233, 233);
    border-radius: 6px;
    color: rgb(66, 66, 66);
    margin: 0 auto;
    text-align: left;
    line-height: 1.6em;
  }

  .highlight {
    color: #41b883;
  }

  .right {
    float: right;
  }

  .updated {
    font-size: medium;
    line-height: 2em;
    color: #35495e;
  }

  .loading {
    color: #41b883;
    background: none;
    text-align: center;
  }

  .error {
    color: red;
  }

  .big {
    font-size: xx-large;
  }
</style>
