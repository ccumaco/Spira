<template>
  <div>
    <h1>{{ data.name }}</h1>
    <iframe
      width="600px"
      height="400px"
      :src="data.trailer"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <p>{{ data.description }}</p>
    <span>Valoracion</span>
    <v-rating
      :value="data.calification"
      color="amber"
      dense
      half-increments
      readonly
      size="20"
    ></v-rating>
    <div class="white--text ml-4">
      {{ data.calification }}
    </div>
    <p>fecha de creacion: {{ data.creationDate }}</p>
    <p>categoria: {{ data.category }}</p>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "infoPelicula",
  data() {
    return {
      route: this.$route.params.id,
      data: null,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/peliculas`)
      .then((response) => (this.data = response.data[0]));
  },
};
</script>
<style lang="scss">
*{
    text-align: center;
}
</style>