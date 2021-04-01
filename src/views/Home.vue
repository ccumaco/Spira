<template>
    <div>
        <h1>Disfruta de nuestras categoriasss</h1>
        <v-row>
            <v-col md="3" lg="3" v-for="(item, index) of categories" :key="index" class="col-category">
                <router-link class="route-circle" :to="item.route">
                    <div :style="`background-color: ${item.color}`" class="circle-categories">
                        <span>{{item.name}}</span>
                    </div>
                    <span class="name-category">{{item.categories}}</span>
                </router-link>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'infoPelicula',
    data (){
        return {
            route: this.$route.params.id,
            categories: [
                {name: 'T', categories: 'terror', route: '/categorias/terror', color: 'red'},
                {name: 'A', categories: 'accion', route: '/categorias/accion', color: 'blue'},
                {name: 'F', categories: 'ficcion', route: '/categorias/ficcion', color: 'brown'},
                {name: 'S', categories: 'Recientes', route: '/Recientes', color: 'green'}
            ]

        }
    },
}
</script>
<style lang="scss">
.col-category{
    text-align: center;
    .route-circle{
        text-decoration: none ;
        .circle-categories{
            display: flex;
            height: 100px;
            width: 100px;
            border-radius: 50%;
            margin: auto;
            span{
                font-size: 40px;
                color: #fff;
                margin: auto;
            }
        }
        .name-category{
            color: #000 !important;
            text-align: center;
            text-transform: uppercase;
        }
    }
}
</style>