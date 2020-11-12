<template>
<div v-if="Object.keys(rate).length !==0">
  <div>
    <p>用户评价</p>
    <p>更多</p>
  </div>
  <div>
    <div class="rate-top">
      <img :src="rate.list[0].user.avatar" alt="">
      <p>{{rate.list[0].user.uname}}</p>
    </div>
    <div class="rate-middle">
      <p>{{rate.list[0].content}}</p>
      <span class="rate-time">{{rate.list[0].created | showDate}}</span>
      <span>{{rate.list[0].style}}</span>
    </div>
    <div class="rate-footer">
      <img v-for="(item,index) in rate.list[0].images" :key="index" :src="rate.list[0].images" alt="">
    </div>
  </div>
</div>
</template>

<script>
import {formatDate} from 'components/common/utils.js'
export default {
  props:{
    rate:{
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
filters: {
 showDate(value) {
    //1.将时间戳转成Date实例对象
    const date = new Date(value * 1000)
    //2.把date传入封装好的formatDate函数进行时间格式化
    return formatDate(date,'yyyy-MM-dd')
  }
}
}
</script>
<style scoped>

</style>