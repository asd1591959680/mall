<template>
  <div class="bottom-nav">
    <div class="bottom-left">
      <div>
        <img class="img1">
        <p>客服</p>
      </div>
      <div>
        <img class="img2">
        <p>店铺</p>
      </div>
      <div>
        <img class="img3">
        <p>收藏</p>
      </div>
    </div>
    <div class="bottom-right">
      <p class="join" @click="joinClick">加入购物车</p>
      <p class="buy">购买</p>
    </div>
  </div>
</template>

<script>

export default {
components: {},
data() {
return {

}
},
methods: {
  joinClick(){
    this.$emit("joinClick")
  }
}
}
</script>
<style scoped>
.bottom-nav {
  display: flex;
  position: relative;
  width: 100%;
  z-index: 6;
  height: 49px;
  background-color: #fff;
}
.bottom-left {
  display: flex;
  width: 50%;
  justify-content: space-around;
  padding-top: 5px;
  font-size: 14px;
  text-align: center;
}
.img1 {
  width: 24px;
  height: 24px;
  background: url(~assets/img/detail/detail_bottom.png) no-repeat 0 -58px;
  background-size: cover;
}
.img2 {
  width: 24px;
  height: 24px;
  background: url(~assets/img/detail/detail_bottom.png) no-repeat 0 -107px;
  background-size: cover;
}
.img3 {
  width: 24px;
  height: 24px;
  background: url(~assets/img/detail/detail_bottom.png) no-repeat 0 0px;
  background-size: cover;
}
.bottom-right {
  width: 50%;
  display: flex;
  text-align: center;
}
.join {
  flex: 1;
  line-height: 49px;
  background-color:#fcda91;
}
.buy {
  flex: 1;
  color: #fff;
  line-height: 49px;
  background-color: #ee69b7;
}
</style>