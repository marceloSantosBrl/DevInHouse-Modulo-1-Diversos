const obterDataFormatada = () => {
  const dataAtual = new Date();
  return `${dataAtual.getHours()}:${dataAtual.getMinutes()}:${dataAtual.getSeconds()}`;
};

setInterval(() => { console.log(obterDataFormatada()); }, 1000);
