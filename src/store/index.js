import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db: {}
  },
  mutations: {
  },
  actions: {
    async Get_Mysql(store, pk) {
      const res = await fetch(`http://localhost:3000/alumnos/${pk}`)
      const json = await res.json()
      this.state.db = json
      console.log(json);
    }
  },
  modules: {
  }
})
