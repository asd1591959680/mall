<template>
<div class="tab-control">
  <div class="control-item" v-for="(item,index) in titles" 
  :key=index :class="{active:index===currentIndex}" @click="itemCilck(index)">
    <span>{{item}}</span>
    </div>
</div>
</template>

<script>

export default {
components: {},
props:{
  titles:{
    type:Array,
    data(){
      return[]
    }
    
  }
},
data() {
return {
  currentIndex:0//初始位置
}
},
methods: {
  itemCilck(index){
this.currentIndex=index//点击位置赋值给currentIndex
this.$emit('tabClick',index)
  }
}
}
</script>
<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  align-items: center;
  text-align: center;
  background-color: #fff;
}
.control-item{
  flex: 1;

}
.control-item span{
  padding: 5px;
  
}
.active{
  color: var(--color-tint);

}
.active span{
  border-bottom: 2px solid var(--color-tint);
}
</style>