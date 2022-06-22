<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Floor/>
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

export default {
  name: 'MyHome',
  
  components:{
    Brand,
    Floor,
    Like,
    ListContainer,
    Rank,
    TodayRecommend
  }
}
</script>

<style>

</style>