<template>
    <div></div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'infoPelicula',
    data (){
        return {
            route: this.$route.params.id,
            categories: [
                {name: '', categories: 'terror', route: '/categori'}
            ]

        }
    },
}
</script>