export default function getString(data, defaultValue = "") {
  return typeof data === "string" ? data : defaultValue;
}
