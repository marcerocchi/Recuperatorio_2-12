<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Formulario msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Formulario from '.src./components/Formulario.vue'

export default {
  name: 'Home',
  components: {
    Formulario
  }
}
</script>
