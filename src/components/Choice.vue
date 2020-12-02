<template>

  <section class="src-components-preguntas">
    <Navbar />
    <div class="container mt-top">
      
      <h4>Choice</h4>
      <table class="table table-striped">
        
        <thead>
          <tr>
            <td>Pregunta</td>
            <td>Respuesta</td>
          </tr>
        </thead>
        <tbody v-if="preguntas.length > 0">
          <tr v-for="(dato, i) in preguntas" :key="i">
            <td>{{dato.pregunta}}</td>
            <td>{{dato.respuestas.join()}}</td>
          </tr>
          
        </tbody>

      </table>
    </div>
  </section>

</template>

<script>

  import Navbar from "./Navbar.vue"

  export default  {
    name: 'src-components-preguntas',
    props: [],
    components: {
             Navbar
    },
    mounted () {
      this.armarTabla()
    },
    data () {
      return {
        preguntas: [
          {pregunta: 1, respuestas: ['c']},
          {pregunta: 2, respuestas: ['c']},
          {pregunta: 3, respuestas: ['b']},
          {pregunta: 4, respuestas: ['d']},
          {pregunta: 5, respuestas: ['a']}
         
        ]
      }
    },
    methods: {
      armarTabla(){
        
      }
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  .mt-top{
      margin-top: 50px;
    }
</style>