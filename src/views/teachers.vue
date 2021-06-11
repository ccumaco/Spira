<template>
  <div>
    <h1 class="title-home mb-10 mt-10">Ver información de los maestros</h1>
    <v-row class="pr-5 pl-5">
      <v-col md="3" lg="3" v-for="(item, index) of data" :key="index">
        <v-card elevation="6" class="card-movie" max-width="374">
          <div class="contain-img-movie pb-4">
            <v-img
              height="100%"
              cover
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="profile fake"
            ></v-img>
          </div>

          <v-card-title class="title-movie">
            {{ item.nombre }}
          </v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="item.calificacion"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="white--text ml-4">
                {{ item.calificacion }} - calificación promedio
              </div>
            </v-row>

            <div class="description-movie-title my-4 subtitle-1">
              Descripción
            </div>
            <div class="information">
                <ul>
                    <li>Apellido: {{ item.apellido }}</li>
                    <li>Salario: {{ item.salario }}</li>
                    <li>Edad: {{ item.edad }}</li>
                </ul>
            </div>
          </v-card-text>

          <v-card-actions>
            <router-link class="router-movie" :to="`/teacher/${item.idmaestros}`">
              <v-btn class="btn-movie"> editar </v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn class="btn-movie eliminar" @click="deleteMovie(item.idmaestros)">
              Eliminar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";

export default {
  nombre: "peliculas",
  data() {
    return {
        data: []
    };
  },
  methods: {
    getTeachers() {
      axios
        .get(`http://localhost:3000/maestros`)
        .then((response) => ((this.data = response.data)));
    },
    deleteMovie(id) {
      axios
        .delete(`http://localhost:3000/${id}`)
        .then((response) => ((this.data = response.data)),
        this.getTeachers()
        );
    },
  },
  created(){
      this.getTeachers()
  }
};
</script>
<style lang="scss">
.title-home {
  margin: 10px 0;
  text-align: center;
}
.card-movie {
  border-radius: 10px;
  height: auto !important;
  background-color: #0e2e4e !important;
  .title-movie {
    text-transform: uppercase;
    font: 10px !important;
    color: #fff;
  }
  .contain-img-movie {
    border-radius: 10px 10px 0 0;
    background-color: #0e2a46;
    width: 100%;
  }
  .description-movie-title {
    color: #fff;
    text-transform: uppercase;
  }
  .information{
    ul{
      margin: 0;
      padding: 0;
      li{
        padding: 3px 0;
        list-style: none;
        color: #fff;
      }
    }
  }
  .div-description {
    color: #fff;
    height: 90px;
    overflow: hidden;
  }
  .router-movie {
    text-decoration: none;
    .btn-movie {
      background-color: #b723d6 !important;
      color: #fff !important;
    }
  }
}
.eliminar span {
  color: grey;
}
</style>