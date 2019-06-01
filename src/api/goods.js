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
