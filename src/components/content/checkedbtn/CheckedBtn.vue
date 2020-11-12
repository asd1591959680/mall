<template>
<div>
  <img src="~assets/img/cart/tick.svg" alt="" 
  :class="{checked:isCheck}" class="item-icon">
</div>
</template>

<script>

export default {
  props:{
    isCheck:{
    type:Boolean,
    default:false
  }
  },
components: {},
data() {
return {
  
}
},
}
</script>
<style scoped>
.item-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #dbdbdb;
}
.checked {
  border: 2px solid red;
  background-color: red;
}
</style>