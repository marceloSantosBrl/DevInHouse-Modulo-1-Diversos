import Funcionario from './Funcionario.js';
import Fatura from './Fatura.js';
import Personagem from './Personagem.js';
import { Cachorro, Gato } from './Animal.js';
import CalculadoraDeArea from './CalculadoraDeArea.js';
import Juros from './Juros.js';

let marcelo;
try {
  marcelo = new Funcionario('68024606020', 'Marcelo', 10);
  console.log(marcelo);
} catch (e) {
  console.log(e.message);
}

const melao = new Fatura(123, 'Melão', 2, 3);

const valor = melao.obterValorTotal();

console.log(valor); // 6

const alyx = new Personagem('Alyx');

console.log(alyx.percentualVida); // 100

alyx.sofreuDano(50);

console.log(alyx.percentualVida); // 50

alyx.usouKitMedico();

console.log(alyx.percentualVida); // 60

const snoopy = new Cachorro('snoopy', 10);
console.log(snoopy.som); // "latido"
const frajola = new Gato('frajola', 8);
console.log(frajola.som); // "miado"

const triangB = new CalculadoraDeArea('triangulo', 6, 8);
const areaTB = triangB.calcular();
console.log(areaTB);

const quadA = new CalculadoraDeArea('quadrado', 4);
const areaQA = quadA.calcular();
console.log(areaQA);

const retA = new CalculadoraDeArea('retangulo', 4, 6);
const areaRT = retA.calcular();
console.log(areaRT);

const testeJuros1 = new Juros(10000, 0.07, 24);
const testeJuros2 = new Juros(10000, 0.15, 10);

console.log(`Juros Simples testeJuros1: ${testeJuros1.calcularJurosSimples()}, 
Juros composto testeJuros1: ${testeJuros1.calcularJurosComposto()}`);
console.log(`Juros Simples testeJuros2: ${testeJuros2.calcularJurosSimples()},
Juros composto testeJuros2: ${testeJuros2.calcularJurosComposto()}`);
