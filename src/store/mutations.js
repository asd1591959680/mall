import {
  ADD_COUNT,
  JION_TO_CART
} from "./mutations_type";

export default {

  ADD_COUNT(state, payload) {
    payload.count++
  },
  JION_TO_CART(state, payload) {
    payload.checked = true //添加属性
    state.cartlist.push(payload)
  }

}