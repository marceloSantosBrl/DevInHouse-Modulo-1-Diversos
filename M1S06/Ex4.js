const fakeTime = () => parseInt(Math.random() * 10000, 10);

const retornoEmpresa1 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 1'));

const retornoEmpresa2 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 2'));

// ... continue daqui ....

Promise.race([retornoEmpresa1, retornoEmpresa2])
  .then((result) => console.log(result))
  .catch((reason) => console.log(reason));
