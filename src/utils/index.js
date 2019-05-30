import moment from "moment";

export function timeFilter(value) {
  return moment(value - 8 * 3600 * 1000).format("YYYY-MM-DD HH:mm");
}

export function timeWithoutMin(value) {
  return moment(value - 8 * 3600 * 1000).format("YYYY-MM-DD");
}

export function dateFilter(value) {
  return moment(value - 8 * 3600 * 1000).format("YYYY/MM/DD");
}
export function htmlToStr(value) {
  value = value.replace(/(\n)/g, "");
  value = value.replace(/(\t)/g, "");
  value = value.replace(/(\r)/g, "");
  value = value.replace(/<\/?[^>]*>/g, "");
  value = value.replace(/\s*/g, "");
  value = value.replace(/&nbsp;/gi, "");

  value = value.replace(/&ldquo;/gi, "");
  value = value.replace(/&rdquo;/gi, "");
  return value;
}
