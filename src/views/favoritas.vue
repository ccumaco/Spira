<template>
  <div>
    <h1>Tus Favoritas</h1>
    <v-row v-for="(item, index) of data" :key="index" class="px-3">
      <v-card elevation="5" class="card-movie mx-4 mb-4 px-4">
        <v-col md="4" lg="4">
          <div class="contain-img">
            <v-img :src="item.cover" class="img-card" width="150px"></v-img>
          </div>
        </v-col>
        <v-col md="8" lg="8">
          <v-card-text>
            <h3 class="title-movie">{{ item.name }}</h3>
            <p class="description-movie">{{ item.description }}</p>
            <v-rating
              :value="item.calification"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <span class="stars-movie">
              {{ item.calification }} - estrellas clasificación promedio</span
            >
            <p class="date-movie">{{ item.creationDate }} - fecha de estreno</p>
          </v-card-text>
        </v-col>
      </v-card>
    </v-row>
    <pre>{{ data }}</pre>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "favoritas",
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/favoritas`)
      .then(
        (response) => ((this.data = response.data), console.log(response.data))
      );
  },
};
</script>
<style lang="scss">
.card-movie {
    width: 100%;
  height: 280px;
  background-color: rgba(#000, 0.6) !important;
  .title-movie {
    text-transform: uppercase;
    color: #fff !important;
    font-size: 20px;
    margin-bottom: 8px;
  }
  .description-movie {
    color: #fff;
    font-size: 15px;
  }
  .stars-movie {
    position: relative;
    display: block;
    color: #fff;
  }
  .date-movie {
    color: #fff;
  }
  .img-card {
    margin: 10px 30px;
    float: left;
  }
}
.no-data{
    text-align: center;
    margin-top: 50px;
    text-transform: uppercase;
}
</style>
