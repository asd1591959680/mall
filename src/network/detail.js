import { request } from "./request"

export function getDetailDate(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url: "/recommend",

  })
}

export class detailInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
    this.lowNowPrice = itemInfo.lowNowPrice
  }
}