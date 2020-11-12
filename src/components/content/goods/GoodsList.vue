<template>
    <div class="goodslist"><!-- 遍历相关数组并把每一项赋值给item  -->
      <goods-item v-for="(item,index) in goods" 
      :key="index" :goodsitems=item 
      class="list-item"></goods-item>
    </div>
</template>

<script>
import GoodsItem from "./GoodsItem"
export default {
components: {GoodsItem},
props:{
  goods:{
    type:Array,
    default(){
      return []
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
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>