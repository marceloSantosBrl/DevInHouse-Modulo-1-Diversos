export default class Funcionario {
  constructor(cpf, nomeCompleto, salario) {
    this.cpf = this.validarCpf(cpf);
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }

  promover(porcentagem) {
    this.salario *= 1 + porcentagem / 100;
  }

  validarCpf(cpf) {
    const regex = /^\d{3}(\.)?\d{3}(\.)?\d{3}(-)?\d{2}$/;
    if (!regex.test(cpf)) {
      throw new Error('CPF inválido!');
    }
    const cpfArr = cpf
      .replaceAll(/[.-]/g, '')
      .split('')
      .map((element) => Number.parseInt(element, 10));
    const cpfInicio = cpfArr.slice(0, 9);
    const digitosVerif = cpfArr.slice(9);
    let primeiroDigito = 0;
    let segundoDigito = 0;
    for (let i = 0; i < cpfInicio.length; i += 1) {
      primeiroDigito += cpfInicio[i] * (10 - i);
      segundoDigito += cpfInicio[i] * (11 - i);
    }
    segundoDigito += digitosVerif[0] * 2;
    primeiroDigito %= 11;
    primeiroDigito = primeiroDigito >= 2 ? 11 - primeiroDigito : 0;
    segundoDigito %= 11;
    segundoDigito = segundoDigito >= 2 ? 11 - segundoDigito : 0;
    if (primeiroDigito !== digitosVerif[0] || segundoDigito !== digitosVerif[1]) {
      throw new Error('CPF inválido');
    }
    return cpfArr.join('');
  }
}
