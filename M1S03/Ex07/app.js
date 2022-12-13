const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matemática',
};

const destruct = (obj1) => {
  const { nome, idade, profissao } = obj1;
  return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
};

console.log(destruct(pessoa));
