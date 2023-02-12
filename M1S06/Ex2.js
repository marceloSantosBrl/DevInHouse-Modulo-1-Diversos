const obterDataFormatada = () => {
  const dataAtual = new Date();
  return dataAtual.toLocaleTimeString('pt-BR');
};

setInterval(() => { console.log(obterDataFormatada()); }, 1000);
