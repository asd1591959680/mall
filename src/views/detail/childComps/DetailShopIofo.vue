<template>
<div v-if="Object.keys(shopinfo).length !==0">
  <div class="shop-top">
    <img :src="shopinfo.shopLogo" alt="">
    <p>{{shopinfo.name}}</p>
  </div>
  <div class="shop-middle">
    <div class="sells">
      <div class="sells-left">
        <p>{{shopinfo.cSells | cSellsFilter}}</p>
        <p>总销量</p>
      </div>
      <div class="sells-right">
        <p>{{shopinfo.cGoods}}</p>
        <p>全部宝贝</p>
      </div>
    </div>
    <div class="score">
      <tr v-for="(item,index) in shopinfo.score" :key="index">
        <td class="score-left">{{item.name}}</td>
        <td class="score-center" :class="{active:item.isBetter}">{{item.score}}</td>
        <div class="score-right" :class="{activeText:item.isBetter}">{{item.isBetter ? '高' : '低'}}</div>
      </tr>
    </div>
  </div>
  <div class="shop-footer">
    <p>进店逛逛</p>
  </div>
</div>
</template>

<script>

export default {
components: {},
props:{
  shopinfo:{
    type:Object,
    default(){
      return {}
    }
  }
},
data() {
return {

}
},
filters: {
  cSellsFilter(value) {
    let res = value
    if(value>10000){
      res = (value / 10000).toFixed(1) + "万"
    }
    return res
  }
},
}
</script>
<style scoped>
.shop-top {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  border-top: 3px solid #f0f0f0;
}
.shop-top img{
  width: 45px;
  height: 45px;
  padding-right: 10px;
}
.shop-middle{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.sells {
  display: flex;
  align-content: center;
  padding-right: 20px;
  border-right: 2px solid #f0f0f0;
  text-align: center;
}
.sells-left {
  padding-right: 20px;
}
.sells-left p:last-child {
  padding-top: 5px;
  font-size: 13px;
}
.sells-right p:last-child {
   padding-top: 5px;
  font-size: 13px;
}
.score {
  font-size: 13px;
}
.score-left {
  padding: 2px 0;
}
.score-center {
  padding: 0 5px;
  font-size: 12px;
  color: #84d144;
}
.score-right {
  color: #fff;
  font-size: 12px;
  background-color: #84d144;
}
.active {
  color: #f85546;
}
.activeText {
color: #fff;
  background-color:#f85546;
}
.shop-footer{
  padding: 20px;

  text-align: center;
}
.shop-footer p {
  margin: auto;
  padding: 5px 30px;
  width: 100px;
  border-radius: 10px;
  background-color: #f0f0f0;
}
</style>