<template>
    <div>
        {{db}}
    </div>
</template>
<script>

import { mapActions, mapState} from 'vuex'

export default {
    name: 'Alumnos',
    data(){
        return{
    }
  },
  mounted(){
      this.Get_Mysql(1)
  },
  computed:{
      ...mapState(['db'])
  },
  methods:{
      ...mapActions([
          'Get_Mysql'
      ])
  },

    
}
</script>