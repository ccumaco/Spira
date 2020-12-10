<template>
  <v-app>
    <v-app-bar
      app
      color="success"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <router-link v-for="(route, index) in routers" :key="index" :to="route.path">{{route.name}}|</router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      routers:[
        {name: "home", path: "/" },
        {name: "about", path: "/about" },
        {name: "contactUs", path: "/contactUs" },
        {name: "how are", path: "/howare" }
      ]
    }
  }
}
</script>
