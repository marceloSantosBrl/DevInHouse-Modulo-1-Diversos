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
      saldo: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      }),
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
let opcaoSelecionada = '';

operacoesFormEstado[1].addEventListener('change', () => {
  const radios = document.querySelectorAll('.operacoes-seletor input');
  if (radios[0].checked) {
    opcaoSelecionada = 'saque';
  } else if (radios[1].checked) {
    opcaoSelecionada = 'deposito';
  } else {
    opcaoSelecionada = 'saldo';
  }
  document.querySelector('#operacoes-valor-input').disabled = opcaoSelecionada === 'saldo';
});
