<template>
<div>
  <nav-bar>
    <div slot="left" @click="back">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="nav-item">
      <div v-for="(item,index) in title" 
      :key="index" :class="{active: index === currentItem}" @click="itemClick(index)">{{item}}</div>
    </div>
    </nav-bar>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
export default {
components: {NavBar},
data() {
return {
  title:['商品','参数','评论','推荐'],
  currentItem: 0
}
 
},
methods: {
  itemClick(index){
    this.currentItem = index
    this.$emit('itemClick',index)
  },
  back(){
    this.$router.go(-1)
  }
},
}
</script>
<style scoped>

.nav-item{
  display: flex;
  justify-content: space-evenly;

  background-color: #fff;

}
.active {
  color: var(--color-tint);
}
</style>