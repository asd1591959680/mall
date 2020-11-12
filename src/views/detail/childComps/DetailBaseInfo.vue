<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.price}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discountDesc" class="discount" 
      :style="{backgroundColor:goods.discountBgColor}">{{goods.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span  class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="" v-if="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
        </span>

    </div>
  </div>
</template>

<script>

export default {
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
components: {},
data() {
return {
columns:[]
}
},

}
</script>
<style scoped>
.base-info{
  padding: 0 5px;
}
.info-title {
  padding: 10px 0;
  font-family: '微软雅黑';
  font-size: 16px;
 
}
.info-price {

  padding-bottom: 15px;
}
.n-price {
  font-size: 22px;
  color: var(--color-tint);
}
.o-price{
  text-decoration-line: line-through;
  font-size: 5px;

  color: #a0a0a0;
}
.discount {
  position: relative;
  top: -6px;
  margin-left: 5px;
  text-align: center;
  padding: 3px 8px;
  font-size: 12px;
  color: #fff;
  border-radius: 10px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 13px;
  color: #a0a0a0;
}
.info-service {
  display: flex;
  justify-content: space-between;
  font-family:\5FAE\8F6F\96C5\9ED1;
  padding: 20px 0;

  font-size: 13px;
}
.info-service img{
  width: 15px;
  height: 15px;
}
</style>