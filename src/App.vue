<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Recuperatorio 01-12 Rocchi</h1>
      <br>
      <Navbar />
      <router-view />

    </div>
  </div>
</template>

<script>
//import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    //Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
