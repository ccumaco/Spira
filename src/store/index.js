import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db: {}
  },
  mutations: {
  },
  actions: {
    async Get_Mysql(store, pk) {
      axios
      .get(`http://localhost:3000/peliculas`)
      .then(response => (this.state.db = response.data, console.log(response))
      )
    }
  },
  modules: {
  }
})
