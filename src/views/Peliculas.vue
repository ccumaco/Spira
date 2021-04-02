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
                        <v-spacer></v-spacer>
                            <v-btn
                                class="btn-movie"
                                @click="deleteMovie(item.id)"
                            >
                                Eliminar
                            </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        {{db}}
    </div>
</template>
<script>

import axios from 'axios'
import { mapActions, mapState} from 'vuex'

export default {
    name: 'peliculas',
    data () {
        return{
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
        ]),
        deleteMovie (id) {
            console.log(this.$route.params.id)
            axios
                .delete(`http://localhost:3000/delete/${id}`)
                .then(
                    (response) => ((this.data = response.data),this.Get_Mysql)
                );
        }
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