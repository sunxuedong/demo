export function getArray(data, defaultValue = []) {
  return Array.isArray(data) ? data : defaultValue;
}

export function joinArray({
  data,
  defaultValue = [],
  symbol = ",",
  filterEmpty = false,
} = {}) {
  data = getArray(data, defaultValue);

  if (filterEmpty) {
    data = data.filter(item => item !== "" && item != null);
  }

  return data.join(symbol);
}
