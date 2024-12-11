export default function timeoutPromise(params = {}) {
  const { timeout = 0 } = params;

  return new Promise(resolve => {
    let timer = setTimeout(() => {
      resolve();
      clearTimeout(timer);
      timer = null;
    }, timeout);
  });
}
