<template>
  <div>
    <v-row justify="space-around">
      <v-col cols="6 pl-12 pr-10">
        <h1 class="my-5">CREAR MATERIA</h1>
        <v-text-field
          outlined
          label="Nombre materia"
          v-model="nombreMateria"
        ></v-text-field>
        <v-text-field
          outlined
          label="Semestre materia"
          v-model="semestreMateria"
        ></v-text-field>
        <p>{{ mensaje }}</p>
        <v-btn class="crearmateria" @click="crearMateria()">Crear materia</v-btn>
      </v-col>
      <v-col class="pl-10" cols="6" sm="12" md="6">
          <h1 class="my-5">MATERIAS CREADAS</h1>
          <v-chip class="mx-2 my-3 chips" v-for="(tag, index) of materias" :key="index">
            {{ tag.nombreMateria }}
          </v-chip>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "materias",
  data() {
    return {
      materias: [],
      nombreMateria: "",
      semestreMateria: "",
      mensaje: "",
    };
  },
  methods: {
    crearMateria() {
      axios
        .post("http://localhost:3000/materia", {
          idmaterias: 0,
          nombreMateria: this.nombreMateria,
          semestreMateria: this.semestreMateria,
        })
        .then(
          (response) => (
            (this.mensaje = "creado con exito"), this.getMaterias()
          )
        )
        .catch(function (error) {
          this.mensaje = "por favor revise los campos";
        });
    },
    getMaterias() {
      axios
        .get("http://localhost:3000/materias", {})
        .then(
          (response) => (
            (this.materias = response.data), console.log(this.materias)
          )
        );
    },
  },
  created() {
    this.getMaterias();
  },
};
</script>
<style lang="scss">
.crearmateria{
  background: #b723d6 !important;
  color: #fff !important;
}
.chips{
    background: #e0e0e052 !important;
    border: 1px solid #00000021;
}
</style>