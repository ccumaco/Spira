<template>
    <div>
        pelicula {{this.$route.params.id}}
    </div>
</template>
<script>

import axios from 'axios'

export default {
    name: 'infoPelicula',
    data (){
        return {
            route: this.$route.params.id,
            data: null
        }
    },
    mounted() {
        axios
            .get(`http://localhost:3000/peliculas`)
            .then(response => (console.log(response.data))
            )
    }
}
</script>