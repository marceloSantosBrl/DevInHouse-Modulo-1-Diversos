const sleep = (value) => new Promise((resolve) => {
  setTimeout(() => resolve(value), 3000);
});

sleep(20).then(console.log).catch(console.log('error'));
