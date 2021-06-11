<template>
  <div>
  <v-row justify="space-around">
    <v-col
      cols="12"
      sm="10"
      md="8"
    >
      <v-sheet
        elevation=""
        class="py-4 px-1"
      >
        <v-chip-group
          mandatory
          active-class="primary--text"
        >
          <v-chip
            v-for="(tag,index) of materias"
            :key="index"
          >
            {{ tag.nombreMateria }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>
<v-row>
    <v-col>
        <v-text-field outlined label="Nombre materia" v-model="nombreMateria"></v-text-field>
        <v-text-field outlined label="Semestre materia" v-model="semestreMateria"></v-text-field>
        <p>{{mensaje}}</p>
        <v-btn @click="crearMateria()">Crear materia</v-btn>
    </v-col>
</v-row>
  </div>
</template>
<script>

import axios from 'axios'
export default {
    name: 'materias',
    data(){
        return{
            materias: [],
            nombreMateria: '',
            semestreMateria: '',
            mensaje: '',
        }
    },
    methods:{
    crearMateria() {
      axios
        .post("http://localhost:3000/materia", {
            idmaterias: 0,
            nombreMateria: this.nombreMateria,
            semestreMateria: this.semestreMateria,
        })
        .then(
          (response) => (
            (this.mensaje = 'creado con exito'),
            this.getMaterias()
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
    },
    created(){
        this.getMaterias()
    }
}
</script>