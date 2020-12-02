<template>

  <section class="src-components-inicio">
    <div class="jumbotron">
      <h3>Lista de tareas</h3>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <table class="table table-striped">
          <thead>
            <tr>
              <td>Descripción</td>
              <td>Nombre</td>
              <td>Email</td>
              <td>Fecha</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dato, i) in tareas" :key="i">
              <td>{{dato.descripcion}}</td>
              <td>{{dato.nombre}}</td>
              <td>{{dato.email}}</td>
              <td>{{formatearFecha(dato)}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

</template>

<script>
  import filterMixins from '../filterMixins.js'
  export default  {
    name: 'src-components-inicio',
    props: [],
    mixins: [filterMixins],
    mounted () {
      this.getTareas()
    },
    data () {
      return {
        url: 'https://5fbed7685923c90016e6b604.mockapi.io/tareas',
        tareas: []
      }
    },
    methods: {
      async getTareas(){
        try {
          const tareas = await this.axios.get(this.url, {
            'content-type': 'application/json'
          })
          this.tareas = tareas.data;
        } catch (error) {
          console.error(error)
        }
      }

    },

    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-inicio {

  }
</style>