async function promiseResolvedAfterTime(resolveAfter) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });
}
promiseResolvedAfterTime(8)
  .then(() => {
    console.log("I am called asynchronously"); // logged out after 8 seconds
  })
  .catch((error) => {
    console.log(error);
  });
