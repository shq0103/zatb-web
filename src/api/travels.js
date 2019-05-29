import request from "@/utils/request";

export function postTravelBook(data) {
  return request({
    url: "/api/TravelBook",
    method: "post",
    data
  });
}
export function getList(query) {
  return request({
    url: "/api/TravelBook",
    method: "get",
    params: query
  });
}
export function getGoodList(query) {
  return request({
    url: "/api/TravelBook",
    method: "get",
    params: query
  });
}
export function getTravelsDetail(id) {
  return request({
    url: `/api/TravelBook/${id}`,
    method: "get"
  });
}
