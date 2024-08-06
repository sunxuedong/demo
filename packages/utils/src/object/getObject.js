import isObject from "./isObject";

export default function getObject(data, defaultValue = {}) {
  return isObject(data) ? data : defaultValue;
}
