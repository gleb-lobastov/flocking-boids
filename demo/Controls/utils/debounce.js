export default function debounce(callback, timeout) {
  let timeoutId;
  return function(...args) {
    const self = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(self, args);
    }, timeout);
  };
}
