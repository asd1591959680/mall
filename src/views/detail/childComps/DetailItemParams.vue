<template>
  <div v-if="Object.keys(itemParams).length !==0">
    <table class="table-one">
      <tr v-for="(item,index) in itemParams.rule.tables[0]" :key="index">
        <td v-for="(j,indey) in item" :key="indey">
          {{j}}
        </td>
      </tr>
    </table>
    <table>
      <tr v-for="(item,indez) in itemParams.info.set" :key="indez">
        <td v-for="(j,indea) in item" :key="indea">
          {{j}}
        </td>
      </tr>
    </table>
    <div v-if="itemParams.image">
      <img :src="itemParams.image" alt="">
    </div>
  </div>
</template>

<script>

export default {
  props:{
    itemParams:{
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
}
</script>
<style scoped>

</style>