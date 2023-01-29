const dadosNome = document.getElementById('dados-pessoais-nome');
dadosNome.setAttribute('required', '');
dadosNome.addEventListener('input', (event) => {
  const regex = /^[A-Za-z\s]*$/;
  if (!regex.test(event.target.value)) {
    event.target.setCustomValidity('Digite um nome válido');
  } else {
    event.target.setCustomValidity('');
  }
});

const dadosCpf = document.getElementById('dados-pessoais-cpf');
dadosCpf.setAttribute('required', '');
dadosCpf.addEventListener('input', (event) => {
  const regex = /\d{3}(\.)?\d{3}(\.)?\d{3}(\-)?\d{2}/;
  if (!regex.test(event.target.value)) {
    event.target.setCustomValidity('Digite um CPF Válido');
  } else {
    event.target.setCustomValidity('');
  }
});

const celular = document.getElementById('dados-pessoais-celular');
celular.setAttribute('required', '');
celular.addEventListener('input', (event) => {
  const celularFormatado = event.target.value.replaceAll(
    /(?:\.|,|-|\(|\)|\s)/g,
    '',
  );
  if (!isFinite(celularFormatado)) {
    event.target.setCustomValidity('Digite um número de telefone válido');
  } else {
    event.target.setCustomValidity('');
  }
});

const senha = document.getElementById('dados-pessoais-senha');
const confirmacao = document.getElementById('dados-pessoais-confirmar-senha');

senha.setAttribute('required', '');
senha.addEventListener('input', () => {
  if (senha.value !== confirmacao.value) {
    senha.setCustomValidity('As senhas são diferentes');
  } else {
    senha.setCustomValidity('');
  }
});

confirmacao.setAttribute('required', '');
confirmacao.addEventListener('input', () => {
  if (senha.value !== confirmacao.value) {
    senha.setCustomValidity('As senhas são diferentes');
  } else {
    senha.setCustomValidity('');
  }
});

const dadosPessoais = document.getElementById('dados-pessoais');
const contas = [
  {
    nome: 'Thais Bertoldo',
    cpf: '999.999.999.99',
    celular: '(99) 99999-9999',
    senha: '1',
    conta: 1674333795439,
    saldo: 0,
  },
];

dadosPessoais.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(dadosPessoais);
  const conta = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const pair of formData.entries()) {
    // eslint-disable-next-line prefer-destructuring
    conta[pair[0]] = pair[1];
  }
  conta.conta = new Date().getTime();
  conta.saldo = 0;
  contas.push(conta);
  dadosPessoais.reset();
  alert(`Conta número: ${conta.conta} criada com sucesso`);
});

const operacoesConta = document.getElementById('operacoes-conta-input');
operacoesConta.setAttribute('required', '');
operacoesConta.addEventListener('input', (event) => {
  const conta = event.target.value;
  const regex = /^[0-9]*$/;
  if (!regex.test(conta)) {
    event.target.setCustomValidity('Digite um número de conta válido');
  } else {
    event.target.setCustomValidity('');
  }
});

let operacaoSelecionada = '';

const atualizarValorInput = (operacao) => {
  const valorInput = document.getElementById('operacoes-valor-input');
  if (operacao === 'saldo') {
    valorInput.setAttribute('disabled', '');
    valorInput.value = '';
  } else {
    valorInput.removeAttribute('disabled');
  }
};

const operacoesSeletor = document.getElementById('operacoes-seletor');
operacoesSeletor.elements[0].setCustomValidity('Selecione uma operação');
operacoesSeletor.addEventListener('click', () => {
  operacoesSeletor.elements[0].setCustomValidity('');
  const radios = operacoesSeletor.elements;
  if (radios[0].checked) {
    operacaoSelecionada = 'saque';
  } else if (radios[1].checked) {
    operacaoSelecionada = 'deposito';
  } else {
    operacaoSelecionada = 'saldo';
  }
  atualizarValorInput(operacaoSelecionada);
});

const operacaoSenha = document.getElementById('operacoes-senha-input');
operacaoSenha.setAttribute('required', '');

const procurarConta = (numeroConta, contasArr) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const conta of contasArr) {
    if (conta.conta === numeroConta) {
      return conta;
    }
  }
  throw new Error('Conta não encontrada');
};

const conferirSenha = (senhaConta, conta) => {
  if (senhaConta !== conta.senha) {
    throw new Error('Senha incorreta');
  }
};

const realizarSaque = (valorSaque, conta) => {
  const valorCorrigido = valorSaque.replace(',', '.');
  const valorNumerico = Number.parseFloat(valorCorrigido, 10);
  if (Number.isNaN(valorNumerico) || !isFinite(valorCorrigido)) {
    throw new Error('Digite um valor para saque válido');
  }
  if (valorNumerico <= 0) {
    throw new Error('Digite um valor para saque maior que zero');
  }
  if (valorNumerico > conta.saldo) {
    throw new Error('Saldo insuficiente para realizar a operação');
  }
  conta.saldo -= valorNumerico;
  alert(`Sucesso! Foram sacados ${valorNumerico} da sua conta\n. Seu saldo atual é de ${conta.saldo}`)
};

const realizarDeposito = (valorDeposito, conta) => {
  const valorCorrigido = valorDeposito.replace(',', '.');
  const valorNumerico = Number.parseFloat(valorCorrigido, 10);
  if (Number.isNaN(valorNumerico) || !isFinite(valorCorrigido)) {
    throw new Error('Digite um valor para deposito válido');
  }
  if (valorNumerico <= 0) {
    throw new Error('Digite um valor para depósito maior que zero');
  }
  conta.saldo += valorNumerico;
  const [saldoFormatado, depositoFormatado] = [conta.saldo, valorNumerico].map((valor) => valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }));
  alert(`Sucesso! Foram depositados ${depositoFormatado} na sua conta.\n`
        + `Seu saldo atual é de ${saldoFormatado}.`);
};

const consultarSaldo = (conta) => {
  const saldoFormatado = conta.saldo.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  alert(`Seu saldo atual é de ${saldoFormatado}`);
};

const formaOperacoes = document.getElementById('operacoes');
formaOperacoes.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    const formData = new FormData(formaOperacoes);
    const conta = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const pair of formData.entries()) {
      // eslint-disable-next-line prefer-destructuring
      conta[pair[0]] = pair[1];
    }
    const contaEncontrada = procurarConta(Number.parseInt(conta.conta, 10), contas);
    conferirSenha(conta.senha, contaEncontrada);
    const valor = document.getElementById('operacoes-valor-input').value;
    switch (operacaoSelecionada) {
      case 'saque':
        realizarSaque(valor, contaEncontrada);
        break;
      case 'deposito':
        realizarDeposito(valor, contaEncontrada);
        break;
      case 'saldo':
        consultarSaldo(contaEncontrada);
        break;
      default:
        alert('Selecione uma opção');
    }
  } catch (e) {
    alert(e.message);
  }
});
