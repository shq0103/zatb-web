import request from "@/utils/request";
export function getAcList(query) {
  return request({
    url: "/api/Activity",
    method: "get",
    params: query
  });
}

export function getAcDetail(id) {
  return request({
    url: `/api/Activity/${id}`,
    method: "get"
  });
}
export function getAcJionList(query) {
  return request({
    url: "/api/ActivityJion",
    method: "get",
    params: query
  });
}
export function publicActivity(data) {
  return request({
    url: "api/Activity",
    method: "post",
    data
  });
}
export function joinActivity(data) {
  return request({
    url: "/api/ActivityJion",
    method: "post",
    data
  });
}

export function getuserJionList(query) {
  return request({
    url: "/api/ActivityJion/user",
    method: "get",
    params: query
  });
}
export function getuserpublicList(query) {
  return request({
    url: "/api/Activity/user",
    method: "get",
    params: query
  });
}
export function deleteActivity(data) {
  return request({
    url: "/api/Activity",
    method: "delete",
    data
  });
}
export function getJoinList(query) {
  return request({
    url: "/api/ActivityJion",
    method: "get",
    params: query
  });
}
export function validUser(id, status) {
  return request({
    url: "/api/ActivityJion",
    method: "put",
    params: { id, status }
  });
}
export function deleteUser(id) {
  return request({
    url: `/api/ActivityJion/${id}`,
    method: "delete"
  });
}
