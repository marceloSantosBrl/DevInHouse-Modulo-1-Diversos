import Funcionario from './Funcionario.js';

let marcelo;
try {
  marcelo = new Funcionario('860.553.525-32', 'Marcelo', 10);
} catch (e) {
  alert(e.message);
}
