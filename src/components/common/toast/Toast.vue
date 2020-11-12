<template>
  <div class="toast" v-show="isToast">
    {{msg}}
  </div>
</template>

<script>

export default {
components: {},
data() {
return {
  msg:'',
  isToast:false
}
},
methods: {
  isShow(msg,time=2000){
    this.msg = msg
    this.isToast = true
    setTimeout(() => {
      this.msg = ''
      this.isToast = false
    },time)
  }
},
}
</script>
<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%,-50%);
  width: 150px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  color: #fff;
  z-index: 99;
  background-color: rgba(0, 0, 0, .7);
}
</style>