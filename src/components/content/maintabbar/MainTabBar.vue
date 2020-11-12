<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon-active" src="~assets/img/tababr/home-active.svg" alt=""/>
        <img slot="item-icon" src="~assets/img/tababr/home.svg" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/catagory">
        <img slot="item-icon-active" src="~assets/img/tababr/catagory-active.svg" alt=""/>
        <img slot="item-icon" src="~assets/img/tababr/catagory.svg" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/buy">
        <img slot="item-icon-active" src="~assets/img/tababr/buy-active.svg" alt=""/>
        <img slot="item-icon" src="~assets/img/tababr/buy.svg" alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon-active" src="~assets/img/tababr/profile-active.svg" alt=""/>
        <img slot="item-icon" src="~assets/img/tababr/profile.svg" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
  name:"MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>