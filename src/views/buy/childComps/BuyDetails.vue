<template>
<div>
    <buy-items v-for="(item,index) in cartList" :key="index" :buyitems = item></buy-items>
</div>

</template>

<script>
import {mapGetters} from 'vuex'

import BuyItems from './BuyItems'
export default {
components: {

  BuyItems
},
data() {
return {

}
},
computed: {
  ...mapGetters(['cartList'])
},

}
</script>
<style scoped>


</style>