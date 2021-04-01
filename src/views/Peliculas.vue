<template>
    <div>
        <h1 class="title-home">Disfruta con la variedad de películas que tenemos para ti!!</h1>
        <v-row class="pr-5 pl-5">
            <v-col md="3" lg="3" v-for="(item, index) of db" :key="index">
                <v-card
                    elevation="6"
                    class=" card-movie"
                    max-width="374"
                >
                    <div class="contain-img-movie py-4">
                        <v-img
                        height="300"
                        contain
                        :src="item.cover"
                        :alt="item.name"
                        ></v-img>
                    </div>

                    <v-card-title class="title-movie">
                        {{item.name}}
                    </v-card-title>

                    <v-card-text>
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                        <v-rating
                        :value="item.calification"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                        ></v-rating>

                        <div class="white--text ml-4">
                        {{item.calification}}
                        </div>
                    </v-row>

                    <div class="description-movie-title my-4 subtitle-1">
                        Descripción
                    </div>

                    <div class="div-description">{{item.description}}</div>
                    </v-card-text>


                    <v-card-actions>
                        <router-link class="router-movie" :to="`/peliculas/${item.id}`">
                            <v-btn
                                class="btn-movie"
                            >
                                Ver mas info
                            </v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        {{db}}
    </div>
</template>
<script>

import { mapActions, mapState} from 'vuex'

export default {
    name: 'peliculas',
    data () {
        return{
            test: [ { "id": 1, "name": "King Kong", "description": "Definitivamente, la gran película de aventuras de la historia del cine y más si teneos en cuenta que no tiene origen literario. Hablamos de un mito del séptimo arte que, pese a lo primitivo de los efectos especiales, sigue siendo la versión más apasionante y entretenida de la historia.", "timeMovie": "2H 4M", "category": "Acción", "trailer": "https://www.youtube.com/watch?v=4Rfajl3bFFM", "suggestions": null, "active": 1, "cover": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2016/11/kong-skull-island-poster_0.jpg?itok=giO2IDyq", "favorite": 0, "creationDate": "1993-07-24T05:50:00.000Z", "stars": 3, "calification": 3 }, { "id": 2, "name": "pelicula Test", "description": "lorem text lorem text lorem text lorem text lorem text lorem text lorem text", "timeMovie": "", "category": "Terror", "trailer": "https://www.youtube.com/watch?v=4Rfajl3bFFM", "suggestions": null, "active": 1, "cover": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2016/11/kong-skull-island-poster_0.jpg?itok=giO2IDyq", "favorite": 0, "creationDate": "2021-03-21T04:59:59.000Z", "stars": 5, "calification": 5 }, { "id": 3, "name": "Vengadores", "description": "La agente de SHIELD Natasha Romanoff, alias la Viuda Negra (Scarlett Johansson), es una de las mejores espías del mundo y, probablemente, la más exper", "timeMovie": "3H 2M", "category": "Acción", "trailer": "https://www.youtube.com/watch?v=HQIiYqOVTWo", "suggestions": null, "active": 1, "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiC3mSrAdG2_Tkuz5CbCm2TA-wYikac3dOPVlzb5jCk1gqsHOD", "favorite": 1, "creationDate": "2015-05-23T04:56:00.000Z", "stars": 5, "calification": 5 }, { "id": 4, "name": "pelicula Test4", "description": "lorem text lorem text lorem text lorem text lorem text lorem text lorem text", "timeMovie": "", "category": "Terror", "trailer": "https://www.youtube.com/watch?v=4Rfajl3bFFM", "suggestions": null, "active": 1, "cover": null, "favorite": 0, "creationDate": "2021-03-21T04:59:59.000Z", "stars": 2, "calification": 3 }, { "id": 44, "name": "pelicula Test5", "description": "lorem text lorem text lorem text lorem text lorem text lorem text lorem text", "timeMovie": "", "category": "Terror", "trailer": "https://www.youtube.com/watch?v=4Rfajl3bFFM", "suggestions": null, "active": 1, "cover": null, "favorite": 0, "creationDate": "2021-03-21T04:59:59.000Z", "stars": 3, "calification": 4 }, { "id": 54, "name": "", "description": null, "timeMovie": "", "category": "", "trailer": null, "suggestions": null, "active": 1, "cover": null, "favorite": 0, "creationDate": "0000-00-00 00:00:00", "stars": 1, "calification": 1 } ]
        }
  },
  mounted(){
      this.Get_Mysql(1)
  },
  computed:{
      ...mapState(['db'])
  },
  methods:{
      ...mapActions([
          'Get_Mysql'
      ])
  },

    
}
</script>
<style lang="scss">
.title-home{
    margin: 10px 0;
    text-align: center;
}
.card-movie{
    height: auto !important;
    .title-movie{
        text-transform: uppercase;
        font: 10px !important;
        color: #fff;
    }
    background-color: rgba(#000,0.5) !important;
    .contain-img-movie{
        background-color: #000;
        width: 100%;
    }
    .description-movie-title{
        color: #fff;
        text-transform: uppercase;
    }
    .div-description{
        color: #fff;
        height: 90px;
        overflow: hidden;
    }
    .router-movie{
        text-decoration: none;
        .btn-movie{
            background-color: red !important;
            color: #fff !important;
        }
    }
}
</style>