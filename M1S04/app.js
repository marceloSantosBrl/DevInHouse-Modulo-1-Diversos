const store = [];
const form = document.querySelector('#dados-pessoais');
const dadosPessoais = form.elements;

const validarDadosTextuais = (texto) => {
  const re = /^[a-zA-Z ]*$/;
  return !(texto === '') && re.test(texto);
};

const validarDadosNumericos = (numeros) => {
  const re = /^[0-9]*$/;
  return !(numeros === '') && re.test(numeros);
};

const adicionarDadoTextual = (dadosDoFormulario, valor, str) => {
  if (validarDadosTextuais(valor)) {
    dadosDoFormulario[str] = valor;
  } else {
    throw new Error(`Campo inválido: ${str}`);
  }
};

const adicionarDadoNumerico = (dadosDoFormulario, valor, str) => {
  if (validarDadosNumericos(valor)) {
    dadosDoFormulario[str] = valor;
  } else {
    throw new Error(`Campo inválido: ${str}`);
  }
};

const adicionarSenha = (dadosdoFormulario, senha, confirmacaoSenha) => {
  if (senha !== confirmacaoSenha) {
    throw new Error('As senhas não conferem');
  }
  if (senha.length < 4) {
    throw new Error('Senha muito curta');
  }
  dadosdoFormulario.senha = senha;
};

const botaoEnviar = document.querySelector('#button-enviar');

botaoEnviar.addEventListener('click', () => {
  try {
    const dadosDoFormulario = {
      nome: '',
      cpf: '',
      celular: '',
      senha: '',
      conta: 0,
      saldo: 0,
    };
    const nome = dadosPessoais.nome.value;
    adicionarDadoTextual(dadosDoFormulario, nome, 'nome');
    const cpf = dadosPessoais.cpf.value;
    adicionarDadoNumerico(dadosDoFormulario, cpf, 'cpf');
    const celular = dadosPessoais.celular.value;
    adicionarDadoNumerico(dadosDoFormulario, celular, 'celular');
    const senha = dadosPessoais.senha.value;
    const confirmacaoSenha = dadosPessoais.confirmarSenha.value;
    adicionarSenha(dadosDoFormulario, senha, confirmacaoSenha);

    dadosDoFormulario.conta = new Date().getTime();

    store.push(dadosDoFormulario);

    alert(`Conta: ${dadosDoFormulario.conta} criada com sucesso!`);
  } catch (e) {
    alert(e.message);
  }
});

const botaoLimpar = document.querySelector('#button-resetar');
botaoLimpar.addEventListener('click', () => {
  form.reset();
});

const operacoesFormElemento = document.querySelector('#operacoes');
const operacoesFormEstado = operacoesFormElemento.elements;
let operacaoSelecionada = '';

operacoesFormEstado['operacoes-seletor'].addEventListener('change', () => {
  const radios = document.querySelectorAll('#operacoes-seletor input');
  if (radios[0].checked) {
    operacaoSelecionada = 'saque';
  } else if (radios[1].checked) {
    operacaoSelecionada = 'deposito';
  } else {
    operacaoSelecionada = 'saldo';
  }
  document.querySelector('#operacoes-valor-input').disabled = operacaoSelecionada === 'saldo';
});

const encontrarConta = (numeroDaConta) => {
  const conta = store.find((contasSalvas) => contasSalvas.conta === numeroDaConta);
  if (conta) {
    return conta;
  }
  throw new Error('Conta não encontrada');
};

const validarSenha = (conta, senha) => {
  if (senha === conta.senha) {
    return undefined;
  }
  throw new Error('A senha digitada está incorreta');
};

const realizarSaque = (conta, valorDeposito) => {
  const valorCorrigido = valorDeposito.replace(',', '.');
  const valorNumerico = Number.parseFloat(valorCorrigido, 10);
  if (Number.isNaN(valorNumerico) || !Number.isFinite(valorCorrigido)) {
    throw new Error('Digite um número válido');
  }
  if (valorNumerico < 0) {
    throw new Error('Digite um número maior que zero');
  }
};

const realizarDeposito = (conta, valorDeposito) => {
  const valorCorrigido = valorDeposito.replace(',', '.');
  const valorNumerico = Number.parseFloat(valorCorrigido, 10);
  if (Number.isNaN(valorNumerico) || !Number.isFinite(valorCorrigido)) {
    throw new Error('Digite um número válido');
  }
  if (valorNumerico < 0) {
    throw new Error('Digite um número maior que zero');
  }
  conta.saldo += valorNumerico;
  const [saldoFormatado, depositoFormatado] = [conta.saldo, valorDeposito].map((valor) => valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }));
  alert(`Sucesso! Foram depositados ${depositoFormatado} na sua conta.\n`
        + `Seu saldo atual é de ${saldoFormatado}.`);
};

const consultarSaldo = (conta) => {
  alert(conta.saldo);
};

operacoesFormEstado['operacoes-botao-confirmar'].addEventListener('click', () => {
  try {
    const conta = encontrarConta(operacoesFormEstado['operacoes-conta-input'].value);
    const senhaProvida = operacoesFormEstado['operacoes-senha-input'].value;
    validarSenha(conta, senhaProvida);
    const valor = operacoesFormEstado['operacoes-valor-input'].value;
    switch (operacaoSelecionada) {
      case 'saque':
        realizarSaque(conta, valor);
        break;
      case 'deposito':
        realizarDeposito(conta, valor);
        break;
      case 'saldo':
        consultarSaldo(conta);
        break;
      default:
        alert('Selecione uma opção');
    }
  } catch (e) {
    alert(e);
  }
});
