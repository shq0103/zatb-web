import request from "@/utils/request";
export function getUserDetail(id) {
  return request({
    url: `/api/User/${id}`,
    method: "get"
  });
}
export function updateUser(user) {
  return request({
    url: "/api/User",
    method: "put",
    data: user
  });
}
