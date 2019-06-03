import request from "@/utils/request";
export function publicGoods(data) {
  return request({
    url: "/api/Goods",
    method: "post",
    data
  });
}
export function getGoodsList(query) {
  return request({
    url: "/api/Goods",
    method: "get",
    params: query
  });
}
export function getUserGoods() {
  return request({
    url: "/api/Goods/user",
    method: "get"
  });
}
export function deleteGoods(id) {
  return request({
    url: `/api/Goods/${id}`,
    method: "delete"
  });
}

export function getGoodsDetail(id) {
  return request({
    url: `/api/Goods/${id}`,
    method: "get"
  });
}
export function goodsComment(data) {
  return request({
    url: "/api/Comment",
    method: "post",
    data
  });
}

export function getCommentList(query) {
  return request({
    url: "/api/Comment",
    method: "get",
    params: query
  });
}
