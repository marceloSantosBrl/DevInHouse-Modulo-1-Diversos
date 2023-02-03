class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  autenticar(emailInformado, senhaInformada) {
    return (this.email === emailInformado && this.senha === senhaInformada);
  }
}

const marcelo = new Usuario('Marcelo', 'example@example.com', '12345');

const form = document.getElementById('autenticacao');

const validarAut = (formdata) => {
  const emailInformado = formdata.elements.email.value;
  const senhaInformada = formdata.elements.senha.value;
  const eAutenticado = marcelo.autenticar(emailInformado, senhaInformada);
  if (eAutenticado) {
    alert('Sucesso');
  } else {
    alert('Credenciais Inválidas');
  }
};
form.addEventListener('submit', (event) => {
  event.preventDefault();
  validarAut(event.target);
});
