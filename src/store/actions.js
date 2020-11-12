import {
  ADD_COUNT,
  JION_TO_CART
} from "./mutations_type";
export default {

  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let alikeItem = context.state.cartlist.find(item => item.iid == payload.iid)
      if (alikeItem) {
        context.commit('ADD_COUNT', alikeItem)
        resolve('当前商品数量加1')
      } else {
        payload.count = 1 //添加属性
        context.commit('JION_TO_CART', payload)
        resolve('添加商品成功')
      }
    })
  }
}