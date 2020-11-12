<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物节</div></nav-bar>
    <tab-control :titles="['流行','精选','时尚']" 
                @tabClick="tabClick" 
                ref="tabControl1" class="tab-control1" v-show="isTabFixed">
                </tab-control>
    <scroll class="content" ref="scroll" 
            :pull-up-load="true"
            :probe-type="3" 
            @scroll="contentScroll"
            @pullingUp="loadMore">
    <home-swiper :banners="banners" @swiperLoad="swiperLoad"></home-swiper>
    <recommend-viwe :recommend="recommend" />
    <home-rage></home-rage>
    <tab-control :titles="['流行','精选','时尚']" 
                @tabClick="tabClick" 
                ref="tabControl2">
                </tab-control>
    <goods-list :goods="goods[currentTab].list"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"
import TabControl from "components/content/tabcontrol/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import HomeSwiper from "./childComps/HomeSwiper"
import RecommendViwe from "./childComps/RecommendView"
import HomeRage from "./childComps/HomeRage"

import {getHomeMultidata,getHomeGoods} from "network/home"
import {itemListenerMixin,backTopMixin} from "components/common/mixin.js"
export default {
  name: "Home",
  data () {
    return {
      banners:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentTab:'pop',
      tabOffsetTop:0,
      isTabFixed:false,
    }
  },
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendViwe,
    HomeRage
  },
  created() {
    this.getHomeMultidata(),
    this.getHomeGoods('pop'),
    this.getHomeGoods('new'),
    this.getHomeGoods('sell')

  },


  deactivated() {
    this.$bus.$off('imgLoad',this.homeImgItem)
  },
  methods: {
    tabClick(index){
      switch (index) {
        case 0:
          this.currentTab='pop'
        break
        case 1:
          this.currentTab='new'
          break
        case 2:
          this.currentTab='sell'
          break

    }
    this.$refs.tabControl1.currentIndex = index
    this.$refs.tabControl2.currentIndex = index
    },

    contentScroll(position){
      this.isShowBackTop = (-position.y) > 1000
      this.isTabFixed = (-position.y+40) > this.tabOffsetTop
    },
    
    loadMore(){
      this.getHomeGoods(this.currentTab)
    },
    swiperLoad(){
      this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
    },
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1 
        this.$refs.scroll.finishPullUp()
      })
    }
  },
    mixins: [itemListenerMixin,backTopMixin],
};
</script>

<style scoped>
  #home{
    height: 100vh;
  }
  .home-nav {
    background-color:var(--color-tint);
    color: #fff;
  }
  .content{
    
    height: calc(100% - 93px);
    overflow: hidden;
  }
  .tab-control1{
    position: fixed;
    left: 0;
    top: 44px;
    width: 100%;
    z-index: 2;

  }

</style>