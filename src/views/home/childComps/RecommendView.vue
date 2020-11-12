<template>
<div class="home-view">
  <div v-for="(item,index) in recommend" :key=index class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </a>
  </div>
</div>
</template>

<script>

export default {
components: {},
props:{
  recommend:{
    type:Array,
    default(){
      return[]
    }
  }
},
data() {
return {

}
},
}
</script>
<style scoped>
.home-view {
  display: flex;
  padding: 10px 0 20px;
  text-align: center;
  font-size: 12px;
  border-bottom:8px solid #f0f0f0 ;
}
.home-view a{
  color:var(--color-text);
}
.recommend-item {
  flex: 1;
}
.home-view img{
  width: 70px;
  height: 70px;
}
</style>