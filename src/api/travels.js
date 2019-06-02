import request from "@/utils/request";

export function postTravelBook(data) {
  return request({
    url: "/api/TravelBook",
    method: "post",
    data
  });
}

export function putTravelBook(data) {
  return request({
    url: "/api/TravelBook",
    method: "put",
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

export function getTBList(query) {
  return request({
    url: "/api/TravelBook/user",
    method: "get",
    params: query
  });
}
export function deleteTravels(data) {
  return request({
    url: "/api/TravelBook",
    method: "delete",
    data
  });
}
