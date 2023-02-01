import Funcionario from './Funcionario.js';
import Fatura from './Fatura.js';
import Personagem from './Personagem.js';

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


const alyx = new Personagem("Alyx");

console.log(alyx.percentualVida); // 100

alyx.sofreuDano(50);

console.log(alyx.percentualVida); // 50

alyx.usouKitMedico();

console.log(alyx.percentualVida); // 60