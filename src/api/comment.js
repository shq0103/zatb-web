import request from "@/utils/request";
export function getUserComment() {
  return request({
    url: "/api/Comment/user",
    method: "get"
  });
}
export function deleteComment(data) {
  return request({
    url: "/api/Comment",
    method: "delete",
    data
  });
}
