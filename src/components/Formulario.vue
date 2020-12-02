<template lang="html">

  <section class="formulario">
        <div class="jumbotron">

      <Navbar />
      <h2>Formulario</h2>
      <hr />
      

        <form novalidate autocomplete="off" @submit.prevent="enviar()">


            <!--  CAMPO DESCRIPCIÓN  -->

            <div class="form-group">
                <label for="descripcion">Descripción</label>
                <input 
                    type="text"
                    id="descripcion"
                    class="form-control"
                    v-model="$v.f.descripcion.$model"
                >
                <!-- CARTELES DE VALIDACION -->
                <div v-if="$v.f.descripcion.$error && $v.f.descripcion.$dirty" class="alert alert-danger">
                <div v-if="$v.f.descripcion.required.$invalid">Este campo es requerido</div>
                <!-- <div v-else-if="$v.f.descripcion.between.$invalid">Este campo debe contener entre {{$v.f.descripcion.between.$param.min}} y {{$v.f.descripcion.between.$param.max}} caracteres</div> -->
                <div v-else-if="$v.f.descripcion.minLength.$invalid">Este campo debe tener {{$v.f.descripcion.minLength.$params.min}} caracteres como minimo</div>
                <div v-else-if="$v.f.descripcion.maxLength.$invalid">Este campo debe tener {{$v.f.descripcion.maxLength.$params.max}} caracteres como maximo</div>


                    
            </div>

            <!-- CAMPO NOMBRE -->

            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input 
                    type="text"
                    id="nombre"
                    class="form-control"
                    v-model="$v.f.nombre.$model"
                >
                  <!-- CARTELES DE VALIDACION -->
                  <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger">
                  <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
                </div>
            </div>


            </div>

            <!--  CAMPO EMAIL  -->

            <div class="form-group">
                <label for="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    class="form-control"
                    v-model="$v.f.email.$model"
                >
                  <!-- CARTELES DE VALIDACION -->
                  <div v-if="$v.f.email.$error && $v.f.email.$dirty" class="alert alert-danger mt-1">
                  <div v-if="$v.f.email.required.$invalid">Este campo es requerido</div>
                  <div v-else-if="$v.f.email.email.$invalid">Debe proveer un email valido</div>
                </div>
            </div>

            <!-- BOTON ENVIO -->

            <div class="form-group">
                <input 
                    type="submit"
                    :disabled="$v.$invalid"
                    class="btn btn-success mt-4"
                    value="Enviar"

                    
                >
            </div>


        </form>

    </div>

    <ListaTareas />
  </section>

</template>

<script>
import { email, required,  minLength, maxLength } from "@vuelidate/validators"; //between,
import Navbar from "./Navbar.vue";
import ListaTareas from "./ListaTareas.vue";

export default {
  name: "src-components-formulario",
  props: [],
  components: {
    Navbar,
    ListaTareas,
  },
  mounted() {},
  data() {
    return {
      f: this.resetCampos(),
      url: "https://5fbed7685923c90016e6b604.mockapi.io/tareas",
    };
  },
  validations: {
    f: {
      nombre: {
        required,
      },
      descripcion: {
        required,
        //between: between(10,50),
        minLength: minLength(10),
        maxLength: maxLength(50)
      },
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    async enviarDatos(datos) {
      try {
        let res = await this.axios.post(this.url, datos, {
          "content-type": "application/json",
        });
        console.log(res.data)
      } catch (error) {
        console.log("HTTP POST ERROR", error);
      }
    },

    enviar() {
      this.$v.$touch(); //para que valide antes de enviar y no puedo mandar vacio
      if (!this.$v.$invalid) {
        let form = this.f;
        console.log(form);
        this.enviarDatos(form);
        this.f = this.resetCampos();
        //this.$v.$reset();

      }
    },

    resetCampos() {
      return {
        nombre: "",
        descripcion: "",
        email: "",
      };
    },
  },
  computed: {},
  }
</script>


<style scoped lang="css">
.formulario {
}
.mt-top {
  margin-top: 50px;
}
label {
  float: left;
}
</style>
