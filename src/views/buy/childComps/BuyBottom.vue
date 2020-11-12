<template>
<div class="accounts">
  <div class="accounts-left">
    <checked-btn :isCheck = "isAllSelect" @click.native="ckeckedAll"></checked-btn>
    <span>全选</span>
  </div>
  <div class="accounts-middle">
    合计：<p>{{totalPrice}}</p>
  </div>
  <div @click="Accounts">去结算({{checkedItems}})</div>
</div>
</template>

<script>
import CheckedBtn from 'components/content/checkedbtn/CheckedBtn.vue'
import {mapGetters} from 'vuex'
export default {
components: {CheckedBtn},
data() {
return {

}
},
computed: {
  ...mapGetters(['cartList']),
  totalPrice(){
    return '¥'+ this.cartList.filter(item => {
      return item.checked
    }).reduce((preValue,item) => {
      return preValue + item.lowNowPrice * item.count
    },0).toFixed(2)
  },
  checkedItems(){
    return this.cartList.filter(item => item.checked).length
  },
  isAllSelect(){
    if(this.cartList.length == 0){ return false}
    return !this.cartList.find(item => !item.checked)
  }
},
methods: {
  ckeckedAll(){
    if(this.isAllSelect){
      return this.cartList.forEach(item => {
        item.checked = false
      });
    } else{
      return this.cartList.forEach(item => {
        item.checked = true
      })
    }
  },
  Accounts(){
    if(!this.isAllSelect){
      this.$toast.isShow('当前商品为空')
    }
  }
}
}
</script>
<style scoped>

.accounts{
  display: flex;
  position: relative;
  height: 44px;
  background-color: pink;
}
.accounts-left{
  display: flex;
  align-items: center;
}
.accounts-middle{
  display: flex;
}
</style>