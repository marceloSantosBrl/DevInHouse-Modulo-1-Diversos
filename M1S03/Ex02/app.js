const mensagemOla = (name) => `Olá, ${name}`;

const writeMessage = () => {
  const input = document.querySelector('#name');
  const text = document.querySelector('.text');
  text.innerText = mensagemOla(input.value);
};
