import toCamelCase from "./toCamelCase";

export default function generateCamelCaseCombinations({ data = [] }) {
  const results = [];

  // Generate combinations starting from the first word
  for (let i = 0; i <= data.length; i++) {
    const subArray = data.slice(0, i);
    results.push(toCamelCase(subArray));
  }

  return results;
}
