export default function tryParse(jsonString, defaultValue = {}) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    return defaultValue;
  }
}
