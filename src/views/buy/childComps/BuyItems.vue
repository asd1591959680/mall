<template>
<div class="items">
  <checked-btn :isCheck = "buyitems.checked" @click.native="checkedItem"></checked-btn>
  <img :src="buyitems.image" alt="" class="item-img">
  <div class="item-content">
    <p>{{buyitems.title}}</p>
    <p>{{buyitems.desc}}</p>
    <div>
      <span>{{buyitems.lowNowPrice}}</span>
      <span>X{{buyitems.count}}</span>
    </div>
  </div>
</div>
</template>

<script>
import CheckedBtn from 'components/content/checkedbtn/CheckedBtn.vue'
export default {
  props:{
    buyitems:{
      type:Object,
      default(){
        return {}
      }
    }
  },
components: {
  CheckedBtn
},
methods: {
  checkedItem(){
    this.buyitems.checked = !this.buyitems.checked
  }
},
data() {
return {
  
}
},

}
</script>
<style scoped>


.items {
  display: flex;
  align-items: center;
}
.item-img{
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.item-content {
  width: 70%;
}
.item-content p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}
</style>