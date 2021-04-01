<template>
    <div>
        <v-row>
            <v-col cols="12">
                {{data[0].cover}}
               <carousel-3d class="carrousel-3d">
                    <slide v-for="(slide, i) in data" :index="i" :key="i">
                    <v-img contain :src="slide.cover" />
                    </slide>
                </carousel-3d>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import axios from 'axios'
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    name: 'Recientes',
    data () {
        return{
            data: null,
            Carousel3d,
            Slide
        }
    },
    mounted () {
        axios
            .get(`http://localhost:3000/populares`)
            .then(
                (response) => ((this.data = response.data), console.log(response.data))
            );
    },
}
</script>
<style lang="scss">
.carrousel-3d{
    width: 100% !important;
}
</style>