export default function getArray(data, defaultValue = []) {
  return Array.isArray(data) ? data : defaultValue;
}
