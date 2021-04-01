<template>
  <v-app>
    <v-main>
      <Toolbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import Toolbar from './components/toolbar'
export default {
  data(){
    return{
    }
  },
  components: {
    Toolbar
  }
}
</script>
