<template>
  <div>
    <v-app-bar  app dark>
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
        { name: "crear Profesor", path: "/" },
        { name: "ver profesores", path: "/teachers" },
        { name: "ver materias", path: "/materias" }
      ],
    };
  },
};
</script>
<style lang="scss">
.v-toolbar__content, .v-toolbar__extension{
  justify-content: flex-end;
}
.links-toolbar{
    color: #fff !important;
    text-decoration: none;
    margin: 0 4px;
    .btn-routes{
        background-color: blue !important;
    }
}
</style>