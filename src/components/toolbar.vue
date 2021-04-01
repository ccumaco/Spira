<template>
  <div>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://e7.pngegg.com/pngimages/327/703/png-clipart-cinema-film-moveis-logo-film.png"
          transition="scale-transition"
          width="80"
        />
      </div>

      <v-spacer></v-spacer>

      <router-link
        class="links-toolbar"
        v-for="(route, index) in routers"
        :key="index"
        :to="route.path"
        >
            <v-btn class="btn-routes">
                {{ route.name }}
            </v-btn>
        </router-link
      >
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "toolbar",
  data() {
    return {
      routers: [
        { name: "home", path: "/" },
        { name: "peliculas", path: "/peliculas" },
        { name: "how are ", path: "/howare" },
      ],
    };
  },
};
</script>
<style lang="scss">
.links-toolbar{
    color: #fff !important;
    text-decoration: none;
    margin: 0 4px;
    .btn-routes{
        background-color: blue !important;
    }
}
</style>