<template>
  <div>
    <v-row>
      <v-col cols="6">
        <div class="container-personal">
          <v-img
            class="imagen-profile"
            width="100%"
            contain
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="profile fake"
          ></v-img>
          <h2>{{ data.nombre }} {{ data.apellido }}</h2>
          <span>Calificacion</span>
          <v-rating
            :value="data.calificacion"
            color="amber"
            dense
            half-increments
            readonly
            size="20"
          ></v-rating>
          <p>edad: {{ data.edad }}</p>
          <p>sueldo: {{ data.salario }}</p>
        </div>
      </v-col>
      <v-col> 
        <h1 class="mb-4">EDITAR MAESTRO</h1>  
        <v-text-field outlined label="Nombre" v-model="data.nombre"></v-text-field>
        <v-text-field outlined label="apellido" v-model="data.apellido"></v-text-field>
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
        <v-text-field outlined label="edad" v-model="data.edad"></v-text-field>
        <v-text-field outlined label="salario" v-model="data.salario"></v-text-field>
        <v-text-field outlined label="calificacion" v-model="data.calificacion"></v-text-field>
        <p>{{mensaje}}</p>
        <v-btn @click="createTeacher()" class="btn-addmovie">CONFIRMAR EDICION</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "infoPelicula",
  data() {
    return {
      mensaje: "",
      route: this.$route.params.id,
      data: null,
      materias: []
    };
  },
  methods:{
    gerTeacher(){
      axios
        .get(`http://localhost:3000/${this.route}`)
      .then(
          (response) => (
            this.data = response.data,
            console.log(response.data)
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
    },
    createTeacher() {
      axios
        .put(`http://localhost:3000/${this.route}`, {
            nombre: this.data.nombre,
            materia_id: 1,
            apellido: this.data.apellido,
            edad: this.data.edad,
            salario: this.data.salario,
            calificacion: this.data.calificacion,
        })
        .then(
          (response) => (
            (this.mensaje = 'actualizado con exito'),
            console.log(this.materias)
          )
        )
        .catch(function(error) {
          this.mensaje = "por favor revise los campos"
          
        });
    },
  },
  created() {
    this.getMaterias()
    this.gerTeacher()
  },
};
</script>
<style lang="scss">
.container-personal{
    text-align: center;
    border-radius: 10px;
    border: 1px solid grey;
    width: 50%;
    margin: 0 auto;
    background: url(https://i.pinimg.com/originals/cf/b3/68/cfb368fd351c9efe8a6bb25e6e2099e8.jpg);
    background-size: cover;
    .imagen-profile{
      object-fit: contain;
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
    h2{
      font-weight: bold;
      text-transform: uppercase;
      margin-top: 10px;
    }
    p, .calificacion{
      font-weight: 500 !important;
    }
}
</style>