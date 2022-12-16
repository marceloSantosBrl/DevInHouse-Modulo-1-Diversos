const mensagemOla = (name) => `Olá, ${name}`;

const newButton = document.querySelector('button');
newButton.addEventListener('click', () => {
  const input = document.querySelector('#name');
  const text = document.querySelector('.text');
  text.innerText = mensagemOla(input.value);
});
