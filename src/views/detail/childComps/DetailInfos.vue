<template>
  <div v-if="Object.keys(detailInfo).length !==0">
    <div>{{detailInfo.desc}}</div>
    <div v-for="(item,index) in detailInfo.detailImage" :key="index">
      <div>{{item.key}}</div>
      <div v-for="(j,indey) in item.list" :key="indey" class="infoImg">
        <img :src="j" alt="" @load="detailInfosImg">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
components: {},
data() {
return {

}
},
methods: {
  detailInfosImg(){
    this.$emit('detailInfosImg')
  }
},
}
</script>
<style scoped>

.infoImg img {
  width: 100%;
}
</style>