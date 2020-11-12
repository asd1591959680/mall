import { debouce } from "./utils"
import BackTop from "components/content/backtop/BackTop"


export const itemListenerMixin = {

  data() {
    return {
      newRefresh: null,
      homeImgItem: null
    }
  },
  mounted() {
    //防抖刷新
    this.newRefresh = debouce(this.$refs.scroll.refresh, 100)
      //对home的刷新
    this.homeImgItem = () => {
        this.newRefresh()
      }
      //监听GoodsItems事件，并回调函数
    this.$bus.$on('imgLoad', this.homeImgItem)

  },
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop,
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },

  }
}