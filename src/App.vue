<template>
  <div id="app">
    <img id="logo" class="animated bounceInDown" alt="Logo" src="./assets/logo.svg">
    <div id="nav" class="animated zoomIn">
      <router-link to="/">Overview</router-link> |
      <router-link to="/charts">Charts</router-link>
    </div>
    <router-view/>
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
</style>
