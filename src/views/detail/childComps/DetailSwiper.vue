<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt="" @load="detailImgLoad">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"
export default {
components: {
  Swiper,
  SwiperItem
},
props:{
  topImages:{
      type:Array,
      dafault(){
        return []
      }
  }
},
data() {
return {
  
}
},
methods: {
  detailImgLoad(){
    this.$emit('detailImgLoad')
  }
},
}
</script>
<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>