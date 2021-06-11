<template>
  <div>
    <v-row>
      <v-col md="6" lg="6" class="form-movie">
        <h1>Crear Maestro</h1>
        <v-text-field outlined label="Nombre" v-model="nombre"></v-text-field>
        <v-text-field outlined label="apellido" v-model="apellido"></v-text-field>
        <v-select
          v-model="materias[0]"
          :hint="`${materias.nombreMateria}, ${materias.idmaterias}`"
          :items="materias"
          item-text="nombreMateria"
          item-value="idmaterias"
          label="materias"
          outlined
          return-object
        ></v-select>
        <v-text-field outlined label="edad" v-model="edad"></v-text-field>
        <v-text-field outlined label="salario" v-model="salario"></v-text-field>
        <v-text-field outlined label="calificacion" v-model="calificacion"></v-text-field>
        <p>{{mensaje}}</p>
        <v-btn @click="createTeacher()" class="btn-addmovie">crearMaestro</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  nombre: "infoPelicula",
  data() {
    return {
      calificacion: 0,
      materias: [],
      route: this.$route.params.id,
      id: 0,
      nombre: "maestro",
      materia_id: 3,
      apellido: "apellido test",
      edad: 30,
      salario: 80000,
      suggestions: null,
      cover: "https://images-na.ssl-images-amazon.com/images/I/911IouavlPL._SL1500_.jpg",
      creationDate: "2021-04-02 23:59:59",
      mensaje: "",
    };
  },
  methods: {
    createTeacher() {
      axios
        .post("http://localhost:3000/maestro", {
            idmaestros: this.id,
            nombre: this.nombre,
            materia_id: this.materias[0].idmaterias,
            apellido: this.apellido,
            edad: this.edad,
            salario: this.salario,
            calificacion: this.calificacion,
        })
        .then(
          (response) => (
            (this.mensaje = 'creado con exito'),
            console.log(this.materias)
          )
        )
        .catch(function(error) {
          this.mensaje = "por favor revise los campos"
          
        });
    },
    getMaterias(){
        axios
        .get("http://localhost:3000/materias", {})
          .then(
            (response) => (
              (this.materias = response.data),
              console.log(this.materias)
            )
          );
    }
  },
  mounted(){
      this.getMaterias()
  }
};
</script>
<style lang="scss">
.title-home{
    text-align: center;
}
.col-edad {
  text-align: center;
  .route-circle {
    text-decoration: none;
    .circle-categories {
      display: flex;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      margin: auto;
      span {
        font-size: 40px;
        color: #fff;
        margin: auto;
      }
    }
    .nombre-edad {
      color: #000 !important;
      text-align: center;
      text-transform: uppercase;
    }
  }
}
.form-movie{
    margin: 0 auto;
    h1 {
        text-align: center;
    }
}
.btn-addmovie{
    margin: 0 auto;
    background-color: blue !important;
    color: #fff !important;
}
</style>
