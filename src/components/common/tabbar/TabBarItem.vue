<template>
  <div class="tab-bar-item" @click="itemCilck">
    <div v-if="!isShow">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
     
    };
  },
  computed:{
    isShow(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle(){
      return this.isShow?{color:this.activeColor}:{}
  }
  },
  methods: {
    itemCilck() {
      this.$router.replace(this.path)
    },
  },
  components: {},
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  font-size: 14px;
  height: 49px;
  text-align: center;
}
.tab-bar-item img {
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  width: 24px;
}
.active {
  color: pink;
}
</style>