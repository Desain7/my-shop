<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Floor v-for="item in floorList" :key="item.id" :list='item'/>
    <Rank/>
    <Brand/>
    <Like/>
    
    
    
  </div>
</template>

<script>
import Brand from "@/pages/Home/Brand"
import Floor from "@/pages/Home/Floor"
import Like from "@/pages/Home/Like"
import ListContainer from "@/pages/Home/ListContainer"
import Rank from "@/pages/Home/Rank"
import TodayRecommend from "@/pages/Home/TodayRecommend"
import {mapState} from "vuex"

export default {
  name: 'MyHome',
  
  components:{
    Brand,
    Floor,
    Like,
    ListContainer,
    Rank,
    TodayRecommend
  },

  mounted() {
    this.$store.dispatch('getFloorList')
  },
  computed:{
    ...mapState({
      floorList: state => state.home.floorList
    })
  }

}
</script>

<style>

</style>