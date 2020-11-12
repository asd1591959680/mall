<template>
  <div class="buy">
    <nav-bar class="nav">
      <div slot="center">购物车({{cartCount}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :pull-up-load = true>
      <buy-details></buy-details>
    </scroll>
    <buy-bottom class="bottom"></buy-bottom>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BuyDetails from './childComps/BuyDetails'
import BuyBottom from './childComps/BuyBottom.vue'
import {mapGetters} from 'vuex'
export default {
  name: "buy",
  components: {
    NavBar,
    Scroll,
    BuyDetails,
    BuyBottom
  },
  computed: {
    ...mapGetters(['cartCount','cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
},
};
</script>

<style scoped>
.buy{
  height: 100vh;
}
.nav{
  background-color: pink;
  color: #fff;
}
.content {
  height: calc(100% - 44px - 49px - 44px);
  overflow: hidden;
}
</style>

