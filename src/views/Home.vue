<template>
  <div>
    <h1 class="title-home">Disfruta de nuestras categorias</h1>
    <v-row>
      <v-col
        md="2"
        lg="2"
        v-for="(item, index) of categories"
        :key="index"
        class="col-category"
      >
        <router-link class="route-circle" :to="item.route">
          <div
            :style="`background-color: ${item.color}`"
            class="circle-categories"
          >
            <span>{{ item.name }}</span>
          </div>
          <span class="name-category">{{ item.categories }}</span>
        </router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" lg="6" class="form-movie">
        <h1>Crea tu pelicula</h1>
        <v-text-field outlined label="Nombre Pelicula" v-model="name"></v-text-field>
        <v-text-field outlined label="Descripción" v-model="description"></v-text-field>
        <v-text-field outlined label="Tiempo Pelicula" v-model="timeMovie"></v-text-field>
        <v-text-field outlined label="Categorias" v-model="category"></v-text-field>
        <v-text-field outlined label="Trailer" v-model="trailer"></v-text-field>
        <v-text-field outlined label="Imagen" v-model="cover"></v-text-field>
        <span>{{mensaje}}</span>
        <v-btn @click="createMovie()" class="btn-addmovie">Agregar Pelicula</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  name: "infoPelicula",
  data() {
    return {
      route: this.$route.params.id,
      id: 0,
      name: "nobre desde pagina",
      description: "descripcion prueba",
      timeMovie: "4H 30M",
      category: "terror",
      trailer: "https://www.youtube.com/embed/xs4fxZYtalE",
      suggestions: null,
      active: 1,
      cover: "https://images-na.ssl-images-amazon.com/images/I/911IouavlPL._SL1500_.jpg",
      favorite: 0,
      creationDate: "2021-04-02 23:59:59",
      mensaje: "",
      categories: [
        {
          name: "T",
          categories: "terror",
          route: "/categorias/terror",
          color: "red",
        },
        {
          name: "A",
          categories: "accion",
          route: "/categorias/accion",
          color: "blue",
        },
        {
          name: "F",
          categories: "ficcion",
          route: "/categorias/ficcion",
          color: "brown",
        },
        {
          name: "S",
          categories: "Recientes",
          route: "/Recientes",
          color: "green",
        },
        {
          name: "P",
          categories: "Populares",
          route: "/populares",
          color: "grey",
        },
        {
          name: "F",
          categories: "tus Favoritas",
          route: "/favoritas",
          color: "yellow",
        },
      ],
    };
  },
  methods: {
    createMovie() {
      axios
        .post("http://localhost:3000/crear-pelicula", {
            id: this.id,
            name: this.name,
            description: this.description,
            timeMovie: this.timeMovie,
            category: this.category,
            trailer: this.trailer,
            suggestions: null,
            active: 1,
            cover: this.cover,
            favorite: this.favorite,
            creationDate: this.creationDate,
        })
        .then(function(response) {
          this.mensaje = "creada con exito",
          console.log(response)
        })
        .catch(function(error) {
          console.log(error);
        });
        this.id = 0,
        this.name = "",
        this.description  = "",
        this.timeMovie = "",
        this.category = "",
        this.trailer = "",
        this.suggestions = null,
        this.active = 1,
        this.cover = "",
        this.favorite = 0,
        this.creationDate = ""
    },
  },
};
</script>
<style lang="scss">
.title-home{
    text-align: center;
}
.col-category {
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
    .name-category {
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
