<template>
<div class="detail">
  <nav-detail class="detail-nav" @itemClick="itemclick" ref="nav"></nav-detail>
  <scroll class="content" :pull-up-load="true" ref="scroll" @scroll = "rolling">
  <detail-swiper :topImages = "topImages" @detailImgLoad="detailImgLoad"></detail-swiper>
  <detail-base-info :goods = "goods"></detail-base-info>
  <detail-shop-iofo :shopinfo = "shopinfo"></detail-shop-iofo>
  <detail-infos :detailInfo = "detailInfo" @detailInfosImg="detailInfosImg"></detail-infos>
  <detail-item-params :itemParams = "itemParams" ref="itemparams"></detail-item-params>
  <detail-rate :rate = "rate" ref="rate"></detail-rate>
  <goods-list :goods = "recommend" ref="recommend"></goods-list>
  
  </scroll>
  <bottom-detail @joinClick = "joinToCart"></bottom-detail>
  <back-top @click.native = "backClick" v-show = "isShowBackTop"></back-top>

</div>
</template>

<script>
import NavDetail from "views/detail/childComps/NavDetail.vue"
import Scroll from 'components/common/scroll/Scroll.vue'

import GoodsList from 'components/content/goods/GoodsList.vue'
import DetailSwiper from "./childComps/DetailSwiper"
import DetailBaseInfo from "./childComps/DetailBaseInfo"
import DetailShopIofo from './childComps/DetailShopIofo.vue'
import DetailInfos from './childComps/DetailInfos.vue'
import DetailItemParams from './childComps/DetailItemParams.vue'
import DetailRate from './childComps/DetailRate.vue'
import BottomDetail from './childComps/BottomDetail'
import {getDetailDate,getRecommend,detailInfo} from "network/detail.js"
import {debouce} from 'components/common/utils.js'
import {itemListenerMixin,backTopMixin} from 'components/common/mixin.js'
import { mapActions } from 'vuex'

export default {
  name: "Detail",
  components: {
  NavDetail,
  GoodsList,
  Scroll,
  DetailSwiper,
  DetailBaseInfo,
  DetailShopIofo,
  DetailInfos,
  DetailItemParams,
  DetailRate,
  BottomDetail,

  },
  data() {
  return {
    iid: null,
    topImages:[],
    goods:{},
    shopinfo:{},
    detailInfo:{},
    itemParams:{},
    lowNowPrice:null,
    rate:{},
    recommend:[],
    jumpPageY:[],
    getjumpPageY:null,
    currentindex:0,

  }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetailDate(this.iid).then(res => {
      console.log(res)
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new detailInfo (data.itemInfo,data.columns,data.shopInfo.services)
      this.shopinfo = data.shopInfo
      this.detailInfo = data.detailInfo
      this.itemParams = data.itemParams
      this.rate = data.rate
    })
    getRecommend().then(res => {
      this.recommend = res.data.list
    })
    this.getjumpPageY = debouce(() =>{
        this.jumpPageY.push(0),
        this.jumpPageY.push(this.$refs.itemparams.$el.offsetTop) ,
        this.jumpPageY.push(this.$refs.rate.$el.offsetTop),
        this.jumpPageY.push(this.$refs.recommend.$el.offsetTop),
        this.jumpPageY.push(Number.MAX_VALUE);
      },100)
  },
  
  methods: {
    ...mapActions(['addCart']),
    detailImgLoad(){
      this.newRefresh()
      this.getjumpPageY() 
    },
    detailInfosImg(){
      this.newRefresh()
    },
    itemclick(index){
      this.$refs.scroll.scrollTo(0,-this.jumpPageY[index],200)
    },
    rolling(position){
      const positionY = -(position.y)
      const length = this.jumpPageY.length
      for(let i = 0;i < length-1;i++){
        if( (this.currentindex !== i) && (positionY >= this.jumpPageY[i] && positionY <= this.jumpPageY[i+1]))
        {
          this.currentindex = i
          this.$refs.nav.currentItem = this.currentindex;
        }
      }
      this.isShowBackTop = (-position.y) > 1000
    },
    joinToCart(){
    const product = {}
    product.image = this.topImages[0]
    product.title = this.goods.title
    product.desc = this.goods.desc
    product.lowNowPrice = this.goods.lowNowPrice
    product.iid = this.iid
    this.addCart(product).then((res) => {//Promises返回值
      this.$toast.isShow(res,2000)
    })
  }
  },
  destroyed () {
    //取消页面刷新
      this.$bus.$off('imgLoad',this.homeImgItem)
  },
  mixins: [itemListenerMixin,backTopMixin]
}
</script>
<style scoped>
.detail-nav {
  position: relative;
  z-index: 2;
  background-color: #fff;
}
.detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 49px);

}
</style>