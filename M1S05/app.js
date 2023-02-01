import Funcionario from './Funcionario.js';
import Fatura from './Fatura.js';

let marcelo;
try {
  marcelo = new Funcionario('68024606020', 'Marcelo', 10);
  console.log(marcelo);
} catch (e) {
  console.log(e.message);
}


const melao = new Fatura(123, "Melão", 2, 3);

const valor = melao.obterValorTotal();

console.log(valor); // 6