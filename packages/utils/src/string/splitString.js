import getString from "./getString";

export default function splitString({
  data,
  symbol = ",",
  defaultValue = [],
} = {}) {
  data = getString(data);
  data = data.length ? data.split(symbol) : defaultValue;

  return data;
}
