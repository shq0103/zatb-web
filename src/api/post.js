import request from "@/utils/request";
export function publicPost(data) {
  return request({
    url: "/api/Post",
    method: "post",
    data
  });
}
export function getPostList(query) {
  return request({
    url: "/api/Post",
    method: "get",
    params: query
  });
}
