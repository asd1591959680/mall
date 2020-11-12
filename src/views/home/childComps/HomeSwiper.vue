<template>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperLoad">
        </a>
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
    props: {
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
  data() {
  return {
      isonce:false
  }
  },
  methods: {
    swiperLoad(){
      if(!this.isonce){
        this.$emit('swiperLoad') 
        this.isonce=true 
      }
      
    }
  },
}
</script>
<style scoped>

</style>