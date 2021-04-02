<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h1 class="title-view">Lo mas reciente</h1>
                <h1 style="display: none;">{{data[0]}}</h1>
               <carousel-3d :perspective="0" :space="400" :display="5">
                    <slide v-for="(slide, i) in data" :index="i" :key="i">
                    <iframe width="100%" height="100%" :src="slide.trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </slide>
                </carousel-3d>
            </v-col>
        </v-row>
        <!-- <v-row>
            <v-col md="4" lg="4" v-for="(item, index) of data" :key="index">
                <v-card>
                    {{item.name}}
                <iframe width="1125" height="633" :src="item.trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </v-card>
            </v-col>
        </v-row> -->
    </div>
</template>
<script>
import axios from 'axios'
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    name: 'populares',
    data () {
        return{
            data: null,
            Carousel3d,
            Slide
        }
    },
    mounted () {
        axios
            .get(`http://localhost:3000/recientes`)
            .then(
                (response) => ((this.data = response.data), console.log(response.data))
            );
    },
}
</script>
<style lang="scss">
.title-view{
    text-align: center;
}
.video-movie{
    height: 400px;
    width: 100%;
}
.carrousel-3d{
    width: 100% !important;
}
</style>