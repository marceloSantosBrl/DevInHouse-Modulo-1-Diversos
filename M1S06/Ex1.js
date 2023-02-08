const sleep = (value) => new Promise((resolve) => {
  setTimeout(() => resolve(value), 3000);
});

sleep(20)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
