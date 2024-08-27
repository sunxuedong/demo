export default function toCamelCase({ data = [] } = {}) {
  return data.reduce((camelString, str, index) => {
    str = str.toLowerCase();
    if (index > 0) {
      str = str.charAt(0).toUpperCase() + str.slice(1);
    }
    camelString += str;
    return camelString;
  }, "");
}
