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
