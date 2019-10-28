const promise1 = new Promise(resolve => {
  setTimeout(() => {
    resolve(1);
  }, 5000);
});
const promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

Promise.race([promise1, promise2]).then(res => {
  console.log(res);
});

Promise.all([promise1, promise2]).then(res => {
  console.log(res);
});
