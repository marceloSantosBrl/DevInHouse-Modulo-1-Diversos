function aprovarDadosCadastrais(cliente) {
  return new Promise((resolve, reject) => {
    if (cliente.cpf === 11111111111) { resolve(true); } else { reject(new Error('CPF inválido')); }
  });
}

function aprovarValorSolicitado(cliente, valor) {
  return new Promise((resolve, reject) => {
    if (cliente.margem >= valor) { resolve(true); } else { reject(new Error('Valor não aprovado')); }
  });
}

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

// continue com o tratamento dos resultados de ambas as promises..

Promise.all([aprovacaoCadastro, aprovacaoValor])
  .then(() => console.log('APROVADO'))
  .catch(() => console.log('REPROVADO'))
  .finally(() => console.log('Fim do Processamento'));
