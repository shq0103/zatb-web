import request from "@/utils/request";
export function getList(query) {
  return request({
    url: "/api/Newspaper",
    method: "get",
    params: query
  });
}
export function getKnowledgeList(query) {
  return request({
    url: "/api/Newspaper",
    method: "get",
    params: query
  });
}
