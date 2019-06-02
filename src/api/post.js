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

export function getPostDetail(id) {
  return request({
    url: `/api/Post/${id}`,
    method: "get"
  });
}

export function postComment(data) {
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
