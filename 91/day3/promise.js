// 1.编程题：https://bigfrontend.dev/zh/problem/implement-Promise-allSettled
// 实现 实现`Promise.allSettled()`

function allSettled(promises) {
  let length = promises.length;
  if (!Array.isArray(promises) || length === 0) {
    return Promise.resolve([]);
  }
  return new Promise((resolve) => {
    let data = [],
      index = 0;
    for (let i = 0; i < length; i++) {
      const promise = promises[i];
      if (promise instanceof Promise) {
        promise
          .then((res) => {
            data[i] = {
              status: "fulfilled",
              value: res,
            };
          })
          .catch((err) => {
            data[i] = {
              status: "rejected",
              reason: err,
            };
          })
          .finally(() => {
            index++;
            index === length && resolve(data);
          });
      } else {
        data[i] = {
          status: "fulfilled",
          value: promise,
        };
        index++;
        index === length && resolve(data);
      }
    }
  });
}
